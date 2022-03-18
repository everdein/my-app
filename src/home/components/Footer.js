import React, { Component } from "react";
import "./styles/footer.css";

export class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <header className="footer-header">Matthew Clark: A Front-End Developer on a Mission</header>
                <div className="table-center">
                    <table className="footer-table">
                        <tbody>
                            <tr>
                                <th>Social Media</th>
                                <th>About Me</th>
                                <th>Languages</th>
                                <th>Frameworks</th>
                            </tr>
                            <tr>
                                <td><a className="fancy-link" href="#">LinkedIn</a></td>
                                <td><a className="fancy-link" href="#">Family</a></td>
                                <td><a className="fancy-link" href="#">Java</a></td>
                                <td><a className="fancy-link" href="#">React.js</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a className="fancy-link" href="#">Hobbies</a></td>
                                <td><a className="fancy-link" href="#">Javascript</a></td>
                                <td><a className="fancy-link" href="#">Redux</a></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><a className="fancy-link" href="#">Education</a></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Footer;