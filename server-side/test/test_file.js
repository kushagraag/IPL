const app = require('../server');
var expect  = require("chai").expect;
var request = require("request");

describe("Points table Testing", function(){
    this.timeout(5000);
    describe("Testing", function(){

        var url= "http://localhost:5000/pointstable";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Live Score Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/livescore";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Schedule Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/schedule";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Most Run Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/mostrun";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Highest Score Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/highestscore";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Highest Average Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/highestavg";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Most Fifty Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/mostfifty";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Most Wicket Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/mostwicket";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Best Bowling Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/bestbowling";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Best Bowling Avgerage Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/bestbowlingavg";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Best Bowling SR Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/bestbowlingsr";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Statistic -- Most Wicket Testing", function(){
    this.timeout(5000);
    describe("Status Check", function(){

        var url= "http://localhost:5000/stats/mostwicket";

        it("returns status 200", function(done){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
            })
        })
    })
})

describe("Testing - Register", function(){
    var url = "http://localhost:5000/user/register";
    this.timeout(5000);
    it("returns status http-code 200", function(done){
        request({
            url: url,
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: {email: "Deepak.Deepak@iiitb.ac.in", password: "1234"},
            json: true
        }, function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

})
describe("Testing - Login", function(){
    var url = "http://localhost:5000/user/login";
    this.timeout(5000);
    it("returns status http-code 200", function(done){
        request({
            url: url,
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: {email: "Deepak.Deepak@iiitb.ac.in", password: "1234"},
            json: true
        }, function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        })
    })

})

describe("Testing - Sign Up", function(){
    var url = "http://localhost:5000/user/login";
    this.timeout(5000);
    it("Correct Credentials", function(done){
        request({
            url: url, 
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:{email: "Deepak.Deepak@iiitb.ac.in", password: "1234"},
            json:true,
        },function(error, response, body){
            expect(response.body.message).to.equal("User login successfully");
            done();
        })
        
    })
    it("Wrong Credentials", function(done){
        request({
            url: url, 
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body:{email: "Deepak.Deepak@iiitb.ac.in", password: "123"},
            json:true,
        },function(error, response, body){
            expect(response.body.message).to.equal("Please enter the correct password");
            done();
        })
        
    })
    
})

  






