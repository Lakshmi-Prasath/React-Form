import React, { useState } from 'react';
import "./bs.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function Bs() {
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        retypeEmail: "",
        password: "",
        retypePassword: "",
        address: "",
        cityName: "",
        country: "",
        zipCode: "",
        phone: "",
        mobile: "",
        landLine: "",
    })



    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setDetails((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function handleClick(event) {
        event.preventDefault()
        console.log(details)
    }
    const [country, setCountry] = useState("")
    const countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan (Province of China)",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ]
    return (
        <div>
            <Nav className='navv' >
                <>&nbsp;</>
            </Nav>
            <h2>React Form</h2>
            <Container >
                <Form className='form' onSubmit={handleClick}>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>First Name:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="firstName" onChange={handleChange} size='sm' type="text" placeholder="First Name" />
                            </Col>

                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Last Name:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="lastName" onChange={handleChange} size='sm' type="text" placeholder="Last Name" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5" >
                        <Row>
                            <Col>
                                <Form.Label>Email:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="emailAddress" onChange={handleChange} size='sm' type="email" placeholder="Email Address" />
                                <Form.Text className="text-muted">
                                    (Your email address will be your user name)
                                </Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Retype Email:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="retypeEmail" onChange={handleChange} size='sm' type="email" placeholder="Email Address" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Password:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="password" onChange={handleChange} size='sm' type="password" placeholder="Password" />
                                <Form.Text id="passwordHelpBlock" muted>
                                    (Min. 6 characters,/number, case-sensitive)
                                </Form.Text>
                                <Form.Check type="checkbox" label="Show Password" className='text-muted' />
                            </Col>

                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Retype Password:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="retypePassword" onChange={handleChange} size='sm' type="password" placeholder="Retype Password" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Address:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="address" onChange={handleChange} size='sm' as="textarea" placeholder="Address" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>City:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="cityName" onChange={handleChange} size='sm' type="text" placeholder="City Name" />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>State:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Select value={country} onChange={e => setCountry(e.target.value)} aria-label="Default select example">
                                    {
                                        countries.map(opt => <option name="country" onChange={handleChange}>{opt}</option>)
                                    }
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Zip code:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="zipCode" onChange={handleChange} size='sm' type="number" min="0" placeholder="Zipcode" />
                                <Form.Text className="text-muted">
                                    (Optional)
                                </Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5">
                        <Row>
                            <Col>
                                <Form.Label>Phone:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control name="phone" onChange={handleChange} size='sm' type="number" min="0" placeholder="Phone" />
                                <Form.Text className="text-muted">
                                    (No spaces or dashes)
                                </Form.Text>
                            </Col>

                            <Col>
                                <Form.Select aria-label="Default select example">
                                    <option name="mobile" onChange={handleChange} value="1">Mobile</option>
                                    <option name="landLine" onChange={handleChange} value="2">Land Line</option>
                                </Form.Select>
                            </Col>
                        </Row>
                    </Form.Group>


                    <Button className='submit' onClick={handleClick} type="submit">
                        Submit
                    </Button>
                </Form>


                <>
                    <p>First Name: {details.firstName}</p>
                    <p>Last Name: {details.lastName}</p>
                    <p>Email Address: {details.emailAddress}</p>
                    <p>Retype Email: {details.retypeEmail}</p>
                    <p>Password: {details.password}</p>
                    <p>Retype Password: {details.retypePassword}</p>
                    <p>Address: {details.address}</p>
                    <p>City Name: {details.cityName}</p>
                    <p>Country: {details.country}</p>
                    <p>Zip Code: {details.zipCode}</p>
                    <p>Phone: {details.phone}</p>
                </>
            </Container>
        </div >
    )
}

export default Bs