import React from 'react';
import './About.css'

const About = () => {
  return (
    <div>

      <div className='bg-primary text-white'>
        <h1><u>Contact US:</u></h1>
        <h1>Manager Information:</h1>
        <h3>Name:Sajib Ahmed</h3>
        <h3>phone:01627477514</h3>
        <h3>E-mail:sajib33-896@diu.edu.bd</h3>
      </div>


      <form class="row g-3 container mt-5">
        {/* form use */}
        <h1 className='text-success'>Give Your Infomation Here:</h1>

        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder='Email' />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder='password' />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1280 Main SA" />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Dhaka</option>
            <option>Tangail</option>
            <option>Rangpur</option>
            <option>Khulna</option>
            <option>Mymensignh</option>
            <option>Rajshahi</option>
            <option>Shylet</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        {/* button use */}
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
};

export default About;