import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';

const Manager = (props) => {
    var responses=[
        {id: 0, name: "Kristen", current_department: "Culinary", position: "Senior Manager of Food. I have  been working as a Junior Manager of food for 3 years now and I feel like I have gained a lot of experience within that time period.", response:  "I will be disappointed but won’t be discouraged and will try again", current_position: "Junior Manager of Food", will_to_work: "yes", expected_pay_raise: 10, will_to_relocate: "no"},
        {id: 1, name: "Ryan", current_department: "Asset Protection", position: "Senior Asset Protector. I feel like I would be a great person to lead the Asset Protection team as I have 5 years of experience being a Junior Asset Protector", response:  "I will be a go-getter and try again!", current_position: "Junior Asset Protector", will_to_work: "yes", expected_pay_raise: 9, will_to_relocate: "yes"},
        {id: 2, name: "Josh", current_department: "Hospitality", position: "Senior Hospitality Director. I have been a Junior Hospitality director for the past 10 years and I feel like I’ve gained a lot of experience and interacted with a lot of our customers and would be a valuable asset as the Senior Hospitality Director", response:  "I will gain more experience and try again!", current_position: "Junior Hospitality Director", will_to_work: "yes", expected_pay_raise: 15, will_to_relocate: "yes"},
        {id: 3, name: "Sinke", current_department: "Asset Protection", position: "Senior Asset Management Specialist, I have been working here for a year now and have had great results from my work. I am very driven and can rise up to challenges, and I am quick to learn new things.", response: "I will work harder in the future so I can get the promotion.", current_position: "Asset Management Consultant, I enjoy being able to be of benefit to the company and produce results within my team.", will_to_work: "yes", expected_pay_raise: 25, will_to_relocate: "No"},
        {id: 4, name: "Daniel", current_department: "Store Operation", position: "Store Operations Manager, I believe that I can do a good job in this position, and I have received positive reviews from both coworkers and customers on my work in the storefront.", response: "I will be very disappointed.", current_position: "Store Operations Associate, I love the workplace environment, helping others and taking inventory is very satisfying.", will_to_work: "yes", expected_pay_raise: 8.5, will_to_relocate: "yes"},
        {id: 5, name: "Keying", current_department: "Service Team",  position: "Service Team Leader, I have been assisting my current team leader for 6 months now, and I have learned much under her tutelage. I believe I would be a greatly effective in the service team leader role.", response: "I will not be discouraged and try again next month.", current_position: "Service Team Member, being able to bring customers smiles on their faces always makes the work interesting, feeling like a new challenge every time.", will_to_work: "yes", expected_pay_raise: 15, will_to_relocate: "no"},
        {id: 6, name: "Christina", current_department: "Distribution", position: "I would like to be an overnight stocker for baby items and  I believe I am the best suited for this job because I am a highschool graduate and I am over 18 years old", response:  "I will stick with day time stocking until further notice.", current_position: "I am currently a day time stocker and the best thing about it is that it’s so easy!", will_to_work: "Yes", expected_pay_raise: 12.75, will_to_relocate: "No"},
        {id: 7, name: "Nicholas", current_department: "Service Team", position: "I would like to be the floral manager and I am qualified for this position because I have been in the floral department for 5 years", response: "I will probably look for other job opportunities where i will be more appreciated",  current_position: "I am a regular florist and the best thing about it is that I get to make wedding flowers.", will_to_work: "Yes", expected_pay_raise: 16.55, will_to_relocate: "Yes"},
        {id: 8, name: "Silvia", current_department: "Food", position:  "I would like to be promoted to the pet groomer position because I think that my years of having a pet and working in this department makes me the best qualified person for this position.", response: "I will just stick with my current position.",  current_position: "I am currently a pet feeder and my favorite thing about the job is petting puppies.", will_to_work: "Yes", expected_pay_raise: 13.50, will_to_relocate: "Yes"}
    ]

    function handleSelect(id){
        alert("Promotion granted to "+responses[id].name);
    }

    var responseStructure = responses.map((response) => {
        return(
            <Card key={response.id} className="mb-3">
                <CardBody>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>Response No. {response.id+1}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>1. Your Current Department</b></p>
                            <p>{response.current_department}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>2. What position are you applying for and what makes you qualified for this position?</b></p>
                            <p>{response.position}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>3. How will you respond if you don't get the promotion?</b></p>
                            <p>{response.response}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>4. What is your current position and what do you like about it?</b></p>
                            <p>{response.current_position}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>5. Are you willing to work more hours if the position requires you to do so?</b></p>
                            <p>{response.will_to_work}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>6. Are you willing to relocate for this position if needed?</b></p>
                            <p>{response.will_to_relocate}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p><b>7. What is your expected pay raise if hired?(Hourly)</b></p>
                            <p>{response.expected_pay_raise}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Button onClick={() => handleSelect(response.id)}>Select</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    });
    return(
        <>
            <div className="row mb-2">
                <div className="col-12 text-center mt-2">
                    <h2>Form Responses</h2>
                </div>
            </div>
            
            <div className="row">
                <div className="offset-2 col-8">
                    {responseStructure}
                </div>
            </div>
        </>
    );
}

export default Manager;