import React from 'react';
import Select from "../../Others/CustomSelect"
export default function editProfile() {
  return (<div className={styles.editable} >
    <h1>General</h1>
    <div className={styles.name} >
        <h3><span>First Name: </span><span style={{display:'none'}} >Vinay Pratap</span><span><input type="text" /></span></h3>
        <h3><span>Last Name: </span><span style={{display:'none'}} >Singh</span><span><input type="text" /></span></h3>
    </div>
    <div className={styles.general} >
        <h3><span>Gender: </span><span style={{display:'none'}} >Male</span><span>
        <Select data={["Male","Female","Other"]} />
        </span>
        </h3>
        <h3><span>DOB: </span><span style={{display:'none'}}>29 Feb 1200</span><span>
            <input type="date" />
            
            </span></h3>
    </div>
    <h1>Address</h1>
    <div className={styles.address} >
        <h3><span>Country: </span><span style={{display:'none'}} >India</span><span>
        <Select data={["India","Pakistan","USA","Africa","Japan","Poland"]} />
        </span>
        </h3>
        <h3><span>Pincode: </span><span style={{display:'none'}}>302012</span><span><input type="number" /></span></h3>
        <h3><span>City: </span><span style={{display:'none'}}>Jaipur</span><span>
        <Select data={["India","Pakistan","USA","Africaaaaaaaaaaaaaa","Japan","Poland"]} />

        </span>
        </h3>
        <h3><span>Address: </span><span style={{display:'none'}} >vinay pratap singh chauhan</span><span><input type="text" /></span></h3>
    </div>
    <h1>Contact</h1>
    <div className={styles.contact} >
        <h3><span>Mobile: </span ><span style={{display:'none'}}>+919834743325</span><span><input type="number" /></span></h3>
        <h3><span>Email: </span><span style={{display:'none'}}>xyz@gmail.com</span><span><input type="email" /></span></h3>
    </div>
    <h1>Password</h1>
    <div className={styles.pass} >
        <button>Change Password</button>
        <h3><input type="text"  placeholder="Current Password"/></h3>
        <h3><input type="text" placeholder="New Password" /><input type="text" placeholder="Confirm Password" /></h3>
        <button>Save Changes</button>
    </div>
</div>);
}
