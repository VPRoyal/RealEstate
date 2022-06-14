import React, { Component } from 'react'
import styles from "./CanvasComp.module.css"
export default class LineChart2 extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            H: null,
            W: null,
            ScrnSize: "big"
        }
        this.canvas = React.createRef();


        this.ini = true
        this.prehov = null  // (Check change on hover)
        this.compupdate = null
        this.timer = { // Universal
            hov: null,
            size: null
        }
        this.data = prop.data        // Universal
        this.label = prop.label     // Univeral
        this.color = prop.color
        this.axis = prop.axis
        this.ctx = null
        this.Drange = this.calc(this.data) // Universal
        this.colV = this.randomClr()       // universal

        this.tick = { x: prop.label.length, y: null }
        this.Yscale = this.range(this.Drange)
        this.pos = { l: 50, r: 20, t: 50, b: 50 }

        this.origin = { x: null, y: null }
        this.grid = { x: this.tick.x - 1, y: this.tick.y - 1 }
        this.dim = { x: null, y: null }
    }


    draw = () => {
        const ctx = this.canvas.current.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height);

        var gcol = { axis: "#FF5757", line: "#5271FF" }


        // Drawing
        this.grids(ctx, this.grid, gcol, this.origin, this.dim, this.Yscale, this.label)
        this.plot(ctx, this.grid)
        this.ini = false
    }
    plot(ctx, grid) {
        ctx.lineWidth = 2
        var n = 0
        for (const d of this.data) {
            var clr = this.color[this.colV[n]]
            ctx.strokeStyle = clr
            ctx.fillStyle = clr
            var i = 0, x1, x2, y1, y2
            while (i <= grid.x) {
                var j = i == grid.x ? i : i + 1
                var p1 = d.points[i], p2 = d.points[j]
                x1 = p1.x, y1 = p1.y
                x2 = p2.x, y2 = p2.y

                this.Line(ctx, x1, y1, x2, y2)   // Line Plots
                var r = 2, t = "stroke"

                this.circle(ctx, x1, y1, r, clr, t)

                i++;
            }
            n++
        }
    }
    grids(ctx, grid, gcol, origin, dim, Yscale, label) {
        ctx.beginPath();
        ctx.strokeStyle = gcol.line;
        ctx.fillStyle = gcol.axis
        ctx.lineWidth = 0.3
        ctx.font = "300 10px sans-serif";

        // x-grid or (Vertical Line) and Label
        var xcol = dim.x / grid.x, x = origin.x
        var i = 0
        while (i <= grid.x) {
            //---> This is Grid creation
            this.Line(ctx, x, origin.y + 5, x, origin.y - dim.y)

            //---> This is Labeling
            ctx.textAlign = "center";
            ctx.textBaseline = 'top';
            ctx.fillText(label[i], x, origin.y + 12);

            x = x + xcol
            i++;
        }

        // y-grid or (Horizontal Line) and Label
        var ycol = dim.y / grid.y, y = origin.y
        i = Yscale[1]
        while (i <= Yscale[0]) {
            //---> This is Grid creation
            this.Line(ctx, origin.x - 5, y, (origin.x + dim.x), y)

            //---> This is Labeling
            ctx.textAlign = "right";
            ctx.textBaseline = 'middle';
            ctx.fillText(i, origin.x - 12, y);

            y = y - ycol
            i = i + Yscale[2]
        }
        ctx.closePath();

        // Axis Label
        ctx.textAlign = "left";
        ctx.textBaseline = 'middle';
        var lwidth = this.origin.x
        for (let i = 0; i < this.data.length; i++) {
            ctx.fillStyle = this.color[this.colV[i]]
            ctx.beginPath()
            ctx.rect(lwidth, this.pos.t / 2 - 12, 50, 20)
            ctx.closePath()
            lwidth = lwidth + 50 + 10
            var text = this.data[i].title
            ctx.fillText(text, lwidth, this.pos.t / 2 - 2)
            lwidth = lwidth + Math.ceil(ctx.measureText(text).width) + 20
            ctx.fill()
        }

    }
    resize = () => {
        if (this.timer.size) {
            clearTimeout(this.timer.size)
        }
        this.timer.size = setTimeout(() => {
            const canvas = this.canvas.current
            const ctx = canvas.getContext('2d');
            this.ctx = ctx
            var minH = 300
            var pr = window.devicePixelRatio, W = canvas.clientWidth, H;
            if(W==this.state.W){
                return;
            }
            canvas.style.height = W / 2 + "px"
            if (W > 1250) {
                canvas.style.height = W / 3 + "px"
            }
            else if (W > 800) {
                canvas.style.height = W / 2.5 + "px"
            }
            else if (W < 450) {
                canvas.style.height = minH + "px"
            }
            else if (W < 600) {
                canvas.style.height = W / 1.5 + "px"
            }
            H = canvas.clientHeight
            canvas.height = Math.floor(H * pr);
            canvas.width = Math.floor(W * pr);
            ctx.scale(pr, pr);
            if (this.state.H != H || this.state.W != W) {
                if (W >= 750 && this.state.ScrnSize != "big") {
                    this.setState({ ScrnSize: "big", H: H, W: W })
                }
                else if (W < 750 && this.state.ScrnSize != "small") {
                    this.setState({ ScrnSize: "small", H: H, W: W })
                }
                else {
                    this.setState({ H: H, W: W })
                }
            }

        }, 300);
    }
    points() {
        var xcol = this.dim.x / this.grid.x
        var fac = this.dim.y / (this.Yscale[0] - this.Yscale[1])
        var n = 0
        for (const d of this.data) {
            var i = 0
            this.data[n]["points"] = []
            while (i <= this.grid.x) {
                var val1 = d.val[i]
                var x1 = this.origin.x + xcol * i, y1 = this.round((this.origin.y - ((val1 - this.Yscale[1]) * fac)), 2)
                d.points[i] = { x: x1, y: y1 }
                i++;
            }
            n++;
        }

    }
    variable = () => {
        var H = this.state.H, W = this.state.W, pos = this.pos
        this.origin = { x: pos.l, y: H - pos.b }
        this.grid = { x: this.tick.x - 1, y: this.tick.y - 1 }
        this.dim = { y: H - (pos.t + pos.b), x: W - (pos.l + pos.r) }
        this.dim = { y: Math.round(this.dim.y / this.grid.y) * this.grid.y, x: Math.round(this.dim.x / this.grid.x) * this.grid.x }
    }
    range(Drange) {
        var max = Drange[0], min = Drange[1]
        if (max == min) {
            max = max + 2
        }
        var range = max - min
        var grid;
        if (this.state.ScrnSize == "big") {
            grid = [7, 8, 9, 10]
        }
        else {
            grid = [4, 5, 6]
        }
        var minTick = { t: 0, v: Infinity }
        if (range > 10) {
            grid.forEach(t => {
                var fac = range / t, exp = Math.ceil(Math.log10(fac))
                var div = Math.pow(10, exp - 1);
                var diff = Math.ceil(fac / div)

                if (exp == 1 && fac != 10) {
                    diff = diff / 10 > 0.5 ? 10 : 5
                }
                diff = diff * div * t       // when range is multiple of grids
                if ((minTick.v > diff) && (diff - range >= 5)) {
                    minTick.t = t
                    minTick.v = diff
                }
                else if (minTick.v == diff && t > minTick.t) {      // Depends on screen
                    minTick.t = t
                }

            });
        }
        else {
            minTick.v = range <= 5 ? 10 : 20             // Depends on screen
            minTick.t = 5
        }
        var MinExp = Math.pow(10, Math.ceil(Math.log10(min)) - 1)
        this.tick.y = minTick.t + 1
        var diff = minTick.v - range
        if (min <= diff) {
            diff = diff - min;
            min = 0
            max = max + diff;
        }
        else {
            var sure = false;
            while (!sure && diff != 0) {
                min -= 1
                diff -= 1
                sure = (min % MinExp == 0 || (min % (MinExp / 2) == 0 && (minTick.v - range) < 10))
            }
            max += diff
        }
        return [max, min, (max - min) / minTick.t]

    }
    calc(data) {
        var max = 0, min = Infinity
        for (const k in data) {
            //Definig new terms
            data[k]["points"] = []
            data[k]["hov"] = []
            max = data[k].max > max ? data[k].max : max
            min = data[k].min < min ? data[k].min : min
        }
        return [max, min]

    }
    hover = (e) => {
        if (this.timer.hov) {
            clearTimeout(this.timer.hov)
        }
        this.timer.hov = setTimeout(() => {
            if (this.canvas&& this.compupdate === true) {
                const ctx = this.ctx
                var hovpoint = {
                    pk: [], vk: null, col: [], val: null
                }
                const canvas = this.canvas.current
                var rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left, y = e.clientY - rect.top
                var n = 0
                for (const d of this.data) {
                    var clr = this.color[this.colV[n]]
                    for (let i = 0; i < d.val.length; i++) {
                        var x1 = d.points[i].x, y1 = d.points[i].y
                        if ((x < x1 + 4) && (x > x1 - 4) && (y < y1 + 4) && (y > y1 - 4)) {
                            // d.hov[i] = true
                            var val1 = d.val[i]
                            if (hovpoint.col[0]) {
                                if (hovpoint.val == val1 && hovpoint.vk == i) {
                                    hovpoint.pk.push(n), hovpoint.col.push(clr)
                                }
                            }
                            else {
                                hovpoint.pk.push(n), hovpoint.vk = i, hovpoint.col.push(clr), hovpoint.val = val1
                            }
                        }
                    }
                    n++;
                }
                var change = false
                var check = false
                if (hovpoint.col[0]) {
                    if (this.prehov) {
                        change = check = !(this.prehov.val == hovpoint.val && this.prehov.vk == hovpoint.vk)
                    }
                    else {
                        change = check = true
                        this.prehov = hovpoint
                    }
                }
                else {
                    change = false
                    if (this.prehov) {
                        change = true
                        this.prehov = null
                    }
                }
                if (change) {
                    this.draw()
                }
                if (check) {
                    this.hovdraw(ctx, hovpoint)
                }

            }
        }, 1);
    }
    hovdraw(ctx, hov) {
        var detail = {
            X: null,
            V: [],
            C: []
        }
        var p, x1, y1
        detail.X = this.label[hov.vk]
        for (let i = 0; i < hov.col.length; i++) {
            p = this.data[hov.pk[i]]
            x1 = p.points[hov.vk].x, y1 = p.points[hov.vk].y
            detail.V.push(p.title + ": " + hov.val)
            detail.C.push(hov.col[i])
            this.circle(ctx, x1, y1, 6, hov.col[i], "fill")
            ctx.strokeStyle=hov.col[i]
        }
        this.databox(ctx, detail, x1, y1)
    }
    databox(ctx, detail, x, y) {      //detail{X:X-axis lable, Y:[(title+": "+val)]}
        const oldstyle = {
            lWidth: ctx.lineWidth,
            fill: ctx.fillStyle,
            stroke: ctx.strokeStyle
        }
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.font = "600 11pt sans-serif";
        var txtW = 0, txtH = 0, txtP = []
        var matrics = ctx.measureText(detail.X)
        txtW = Math.ceil(matrics.width)
        txtH = Math.ceil(matrics.actualBoundingBoxAscent + matrics.actualBoundingBoxDescent)
        txtP.push(txtH)
        detail.V.forEach(e => {
            ctx.font = "bold 8pt sans-serif";
            matrics = ctx.measureText(e)
            txtW = txtW < Math.ceil(matrics.width) ? Math.ceil(matrics.width) : txtW
            var h = Math.ceil(matrics.actualBoundingBoxAscent + matrics.actualBoundingBoxDescent)
            txtH = txtH + h
            txtP.push(txtH)
        });
        const len = detail.V.length
        const minW = 100
        txtW = txtW < minW ? minW : txtW
        const pad = { t: 4, b: 7, l: 5, r: 5 }
        const gap = { x: 10, v: 6 }
        var SD=10, SW=SD*Math.cos(Math.PI/180*45)  , SA=45         // Square diagonal and square width && Square Angle
        var boxD = 15, boxH = txtH + pad.t + pad.b + gap.x + (gap.v * (len - 1)), boxW = txtW + pad.l + pad.r
        var txtC = { x: null, y: null }, X,Y, RX,RY
        if ((x > this.origin.x + this.dim.x / 4) && (x < this.origin.x + this.dim.x * 3 / 4)) {
            txtC.x=x-boxW/2, txtC.y=y-boxD-boxH-SD/2
            if (y < this.origin.y - this.dim.y / 2) {
                boxH = boxH * -1, boxD=-boxD
                SD=-SD, SW=-SW
                txtC.x=x-boxW/2, txtC.y=y-boxD-SD/2
            }
            X=x, Y=y-boxD
            RX=X-boxW/2, RY=Y-SD/2
        }
        else {
            SA=-SA
            txtC.x=x+boxD+SD/2, txtC.y=y-boxH/2
            if (x > this.origin.x + this.dim.x * 3 / 4) {
                boxW=-boxW, boxD=-boxD
                SD=-SD, SW=-SW
            txtC.x=x+boxD+SD/2+boxW, txtC.y=y-boxH/2

            }
            X=x+boxD,Y=y
            RX=X+SD/2, RY=Y-boxH/2

            boxH=-boxH
        }
        ctx.fillStyle = "rgba(255, 255, 255,0.95)"
        ctx.lineWidth=3
        ctx.strokeRect(RX,RY,boxW,-boxH);
        ctx.save();
        ctx.translate(X, Y);
        ctx.rotate(Math.PI / 180 * -SA);
        ctx.strokeRect(0,0,SW,-SW)
        ctx.fillRect(0,0,SW,-SW)
        ctx.restore();
        ctx.fillRect(RX,RY,boxW,-boxH);




         ctx.fillStyle = "#1B1212"
         ctx.font = "600 11pt sans-serif";
         ctx.fillText(detail.X, txtC.x + pad.l, txtC.y + pad.t)
         var i = 0
         ctx.font = "bold 9pt sans-serif";
         detail.V.forEach(e => {
             ctx.fillStyle = detail.C[i]
             ctx.fillText(e, txtC.x + pad.l, txtC.y + pad.t + gap.x + gap.v * i + txtP[i])
             i++
         });

        //Restoration
        ctx.lineWidth = oldstyle.lWidth
        ctx.strokeStyle = oldstyle.stroke
        ctx.fillStyle = oldstyle.fill
    }
    circle(ctx, x, y, radius, clr, type) {
        var old = {
            lw: ctx.lineWidth,
            fil: ctx.fillStyle,
            str: ctx.strokeStyle
        }
        ctx.strokeStyle = clr
        ctx.fillStyle = clr
        ctx.lineWidth = 1
        ctx.beginPath();
        if (type == "stroke") {
            ctx.arc(x, y, radius, 0, Math.PI * 2, true)
            ctx.stroke()
        }
        else if (type == "fill") {
            ctx.arc(x, y, radius, 0, Math.PI * 2, true)
            ctx.fill()
        }
        ctx.closePath()
        ctx.lineWidth = old.lw
        ctx.fillStyle = old.fil
        ctx.strokeStyle = old.str
    }
    Line(ctx, x, y, xx, yy) {
        ctx.beginPath();
        ctx.translate(0.5, 0.5);
        ctx.moveTo(x, y);
        ctx.lineTo(xx, yy);
        ctx.stroke();
        ctx.translate(-0.5, -0.5);
        ctx.closePath();
    }
    randomClr() {
        var min = 0, max = this.color.length - 14
        var num = []
        const gen = (min, max) => {
            var n = (new Date().getTime() * Math.PI) % 1;
            return Math.floor((n * max) + min)
        }
        var m = gen(min, max)
        for (let i = 0; i < this.data.length; i++) {
            m = m == max ? 0 : m
            num.push(m)
            m++
        }
        return num
    }
    round(num, dig) {
        var fac = Math.pow(10, dig)
        return Math.round(num * fac)/fac
    }
    componentDidUpdate(preP, preS) {
        this.compupdate = false
        if (preS.ScrnSize != this.state.ScrnSize) {
            this.Yscale = this.range(this.Drange)
            this.variable()
            this.points()
            this.draw()
            this.compupdate = true
        }
        else if (preS.H != this.state.H || preS.W != this.state.W) {
            this.variable()
            this.points()
            this.draw()
            this.compupdate = true
        }
    }
    componentDidMount() {
        if (this.ini) {
            this.resize()

        }
        addEventListener("resize", this.resize)
        addEventListener("mousemove", this.hover)
    }
    componentWillUnmount() {
        removeEventListener("resize", this.resize)
        removeEventListener("mousemove", this.hover)
    }
    shouldComponentUpdate(props,state){
        if(props.color!=this.props.color || JSON.stringify(this.props.data)!=JSON.stringify(props.data)){
            return true
        }
        if(state.ScrnSize != this.state.ScrnSize || state.H != this.state.H || state.W != this.state.W){
            return true
        }
        return false
    }
    render() {
        return (
            <canvas ref={this.canvas} id={styles.line}></canvas>
        )
    }
}

