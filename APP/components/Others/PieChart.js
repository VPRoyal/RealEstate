import React, { Component } from 'react'
import styles from "./CanvasComp.module.css"
export default class PieChart extends Component {
    constructor(prop) {
        super(prop);
        this.canvas = React.createRef();
        this.timer = {
            size: null,
            hover: null
        }
        this.size = { w: null, h: null }
        this.dim = {
            c: { x: null, y: null },
            s: { w: null, h: null },
            r:{o:null,i:null}
        }
        this.color = prop.color
        this.data = prop.data
        this.label = prop.label
        this.config = prop.config // universal

        this.hovkey = null
        this.preinside = false

        this.n = this.label.length    // Universal
        this.ctx = null
        this.VCol = this.randomClr()  // Universal
        this.pos = { t: 5, b: 5, l: 5, r: 5 }  // universal
        this.sum = this.sum();  // Universal
        this.angle()    // Universal
    }
    draw() {
        if (this.canvas && this.ctx) {
            var ctx = this.ctx
            ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);
            var typ = this.config.dough
            var k = this.hovkey, hov = this.preinside
            var point=[this.pos.l+2, this.pos.t+2]
            for (let i = 0; i < this.n; i++) {
                var x = this.dim.c.x, y = this.dim.c.y
                var clr = this.color[this.VCol[i]], Ro=this.dim.r.o, Ri=this.dim.r.i
                var ang = this.data[0].angle[i]
                if (this.config.label) {
                    point=this.tag(ctx,point[0],point[1],this.label[i],clr)
                }
                ctx.globalAlpha = 0.9
                if (hov) {
                    if (k.pk == 0 && k.vk == i) {
                        Ro += 3, Ri += 3
                        hov = false
                        ctx.globalAlpha = 1
                        if (!typ) {
                            var a=ang[0]+(ang[1]-ang[0])/2
                            x=x+3*Math.cos(a), y=y+3*Math.sin(a)
                        }
                    }
                }
                this.arc(ctx, x, y, clr, "White", Ro, ang[0], ang[1], typ, Ri)
            }
            // Central Text
            if (typ) {
            var f="600 "+(this.dim.r.i/3*2)+"px sans-serif"
            ctx.font = f
            ctx.fillStyle="black"
            ctx.globalAlpha = 0.8
            ctx.textAlign = "center";
            ctx.textBaseline = 'middle';
            ctx.fillText(this.sum, this.dim.c.x, this.dim.c.y)
            }
            

            // Resetting Things Up
        }
    }
    tag(ctx,x,y,text,col){
        var gapl=10, gapt=10, gapb=20
        if (this.dim.s.w+this.pos.l-x<80) {
            y=y+30
            x=this.pos.l+2
        }
        ctx.font = "300 18px serif";
        ctx.textAlign = "left";
        ctx.textBaseline = 'middle';
        ctx.fillStyle=col
        ctx.fillRect(x, y+gapt-10, 50, 20)
        x=x+50+10
        var m=ctx.measureText(text);
        ctx.fillText(text,x,y+gapt)
        x=m.width+x+gapb
        return [x,y]
        
    }
    resize = () => {
        if (this.timer.size) {
            clearTimeout(this.timer.size)
        }
        this.timer.size = setTimeout(() => {
            if (this.canvas) {
                const canvas = this.canvas.current
                const ctx = canvas.getContext('2d');
                this.ctx = ctx
                var pr = window.devicePixelRatio, W = canvas.clientWidth, H;
                H = W<800?W:800
                H=W<400?W*1.2:H
                H=this.config.label?H:W
                canvas.style.height = H + "px"
                canvas.height = Math.floor(H * pr);
                canvas.width = Math.floor(W * pr);
                ctx.scale(pr, pr);
                // canvas.style.width = W + 'px';
                // canvas.style.height = H + 'px';
                this.size.w = W, this.size.h = H

                this.calc()
                this.draw()
            }
        }, 100);
    }
    randomClr() {
        var min = 0, max = this.color.length - 14
        var num = []
        const gen = (min, max) => {
            var n = (new Date().getTime() * Math.PI) % 1;
            return Math.floor((n * max) + min)
        }
        var m = gen(min, max)
        for (let i = 0; i < this.n; i++) {
            m = m == max ? 0 : m
            num.push(m)
            m++
        }
        return num
    }
    calc() {
        this.dim.s.w = this.size.w - this.pos.l - this.pos.r
        this.dim.s.h = this.size.h - this.pos.t - this.pos.b
        this.dim.c.x = this.dim.s.w / 2 + this.pos.l
        this.dim.c.y = this.dim.s.h / 2 + this.pos.t+(this.config.label?30:0)
        if (this.config.label) {
            this.dim.r.o=this.size.w>this.size.h?Math.floor(this.size.h/3):Math.floor(this.size.w/3)
        }
        else{
            this.dim.r.o=this.size.w>this.size.h?Math.floor(this.size.h/2.2):Math.floor(this.size.w/2.2)
        }
        this.dim.r.i=Math.floor(this.dim.r.o/2)

    }
    angle() {
        this.data[0]["angle"] = []
        var StartA = 0, EndA
        for (let i = 0; i < this.n; i++) {
            var angle = (this.data[0].val[i] / this.sum) * (2 * Math.PI)
            EndA = angle + StartA
            this.data[0]["angle"].push([StartA, EndA])
            StartA = EndA
        }
    }
    hover = (e) => {
        if (this.timer.hov) {
            clearTimeout(this.timer.hov)
        }
        this.timer.hov = setTimeout(() => {
            if (this.canvas) {
                const canvas = this.canvas.current
                const ctx = this.ctx
                var rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left, y = e.clientY - rect.top
                var c = this.dim.c, Ro = this.dim.r.o, Ri = this.dim.r.i
                const dx = x - c.x, dy = y - c.y
                var dis = dx * dx + dy * dy, Ri2 = Ri * Ri, Ro2 = Ro * Ro
                var change = false, inside = false
                var hovkey = {
                    pk: null, vk: null
                }
                if (!((this.type && (dis < Ri2 || dis > Ro2)) || (!this.type && dis > Ro2))) {

                    var Pangl = (Math.atan2(dy, dx) + Math.PI * 2) % (Math.PI * 2)
                    for (let i = 0; i < this.n; i++) {
                        var ang = this.data[0].angle[i]
                        if (Pangl < ang[1] && Pangl > ang[0]) {
                            hovkey.pk = 0, hovkey.vk = i
                            inside = true
                            if (this.preinside) {
                                if (this.hovkey.pk === hovkey.pk && this.hovkey.vk === hovkey.vk) {
                                    change = false
                                }
                                else {
                                    change = true
                                    this.hovkey = hovkey
                                }
                            }
                            else {
                                change = true
                                this.hovkey = hovkey
                                this.preinside = true
                            }
                        }
                    }
                }
                if (!inside) {
                    change = this.preinside
                    this.preinside = false
                }
                if (change) {
                    this.draw()
                    if (inside) {
                        this.hoverdraw(hovkey)
                    }
                }
            }
        }
            , 1);
    }
    hoverdraw(key) {
        var Ro =this.dim.r.o, Ri =this.dim.r.i, C = this.dim.c
        var RDiff = (Ro - Ri) / 2 + Ri
        var p = key.pk, v = key.vk
        var ang = this.data[p].angle[v]
        var AngDiff = (ang[1] - ang[0]) / 2 + ang[0]
        var x = C.x + RDiff * Math.cos(AngDiff), y = C.y + RDiff * Math.sin(AngDiff)
        const obj = {
            v: this.label[v] + ": " + this.data[p].val[v],
            c: this.color[this.VCol[v]]
        }
        this.box(x, y, obj)
    }
    box(x, y, obj) {
        const ctx = this.ctx
        const oldstyle = {
            lWidth: ctx.lineWidth,
            fill: ctx.fillStyle,
            stroke: ctx.strokeStyle
        }
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.font = "600 11pt sans-serif";
        var txtW = 0, txtH = 0, txtP
        var matrics = ctx.measureText(obj.v)
        txtW = Math.ceil(matrics.width)
        txtH = Math.ceil(matrics.actualBoundingBoxAscent + matrics.actualBoundingBoxDescent)
        // const minW = 100
        // txtW = txtW < minW ? minW : txtW
        const pad = { t: 2, b: 4, l: 5, r: 5 }
        var SD = 10, SW = SD * Math.cos(Math.PI / 180 * 45), SA = 45           // Square diagonal and square width && Square Angle
        var boxD = 0, boxH = txtH + pad.t + pad.b, boxW = txtW + pad.l + pad.r
        var txtC = { x: null, y: null }, X, Y, RX, RY
        SA = -SA
        txtC.x = x + SD / 2, txtC.y = y - boxH / 2
        if (x > this.dim.c.x) {
            boxW = -boxW, boxD = -boxD
            SD = -SD, SW = -SW
            txtC.x = x + SD / 2 + boxW, txtC.y = y - boxH / 2

        }
        X = x, Y = y
        RX = X + SD / 2, RY = Y - boxH / 2

        boxH = -boxH

        ctx.globalAlpha = 0.95
        ctx.fillStyle = "white"
        ctx.strokeStyle = "rgba(0,0,0,0.5)"
        ctx.lineWidth = 3
        ctx.strokeRect(RX, RY, boxW, -boxH);
        ctx.save();
        ctx.translate(X, Y);
        ctx.rotate(Math.PI / 180 * -SA);
        ctx.strokeRect(0, 0, SW, -SW)
        ctx.fillRect(0, 0, SW, -SW)
        ctx.restore();
        ctx.fillRect(RX, RY, boxW, -boxH);

        ctx.fillStyle = obj.c
        ctx.font = "600 11pt sans-serif";
        ctx.fillText(obj.v, txtC.x + pad.l, txtC.y + pad.t)

        //Restoration
        ctx.lineWidth = oldstyle.lWidth
        ctx.strokeStyle = oldstyle.stroke
        ctx.fillStyle = oldstyle.fill
    }
    sum() {
        var sum = 0
        for (let i = 0; i < this.n; i++) {
            sum += this.data[0].val[i]
        }
        return sum;
    }
    arc(ctx, x, y, fill, stroke, Ro, startAngle, endAngle, type, Ri) {
        // Type is used to create doughnut circle. by default type is false
        // Default Orientation is in clockwise Dir., angels will be positive on going clockwise
        ctx.fillStyle = fill
        ctx.lineWidth = 2
        ctx.strokeStyle = stroke
        ctx.beginPath();
        ctx.translate(0.5, 0.5);
        if (type) {
            ctx.arc(x, y, Ri, startAngle, endAngle)
            ctx.arc(x, y, Ro, endAngle, startAngle, true)
        }
        else {
            ctx.moveTo(x, y)
            ctx.arc(x, y, Ro, startAngle, endAngle)
        }
        ctx.translate(-0.5, -0.5);
        ctx.closePath()
        ctx.fill()
        if (this.n==1) {
            return false
        }
        ctx.stroke()
    }
    
    componentDidMount() {
        if (this.canvas) {
            this.ctx = this.canvas.current.getContext("2d")
            this.resize()
        }
        addEventListener("resize", this.resize)
        addEventListener("mousemove", this.hover)
    }
    componentWillUnmount() {
        removeEventListener("resize", this.resize)
        removeEventListener("mousemove", this.hover)

    }
    render() {
        return (
            <canvas ref={this.canvas} id={styles.pie}></canvas>
        )
    }
}