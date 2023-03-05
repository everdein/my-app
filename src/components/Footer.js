import React, { Component } from "react";
import "./styles/footer.css";
import pdf from "../docs/resume.pdf";

export class Footer extends Component {
    render() {
        return(
            <div className="footer-container">
                <div className="table-center">
                    <table className="footer-table">
                        <tbody>
                            <tr>
                                <th>- Career -</th>
                                <th>- Languages -</th>
                                <th>- Helpful Tools -</th>
                                <th>- Achievments -</th>
                            </tr>
                            <tr>
                                <td><a className="fancy-link" href="https://www.linkedin.com/in/mclark1/" rel="noreferrer noopener" target="_blank">LinkedIn</a></td>
                                <td><a className="fancy-link" href="#">Java</a></td>
                                <td><a className="fancy-link" href="#">React</a></td>
                                <td><a className="fancy-link" href="#">Education</a></td>
                            </tr>
                            <tr>
                                <td><a className="fancy-link" href={pdf} rel="noreferrer noopener" target="_blank">Resume</a></td>
                                <td><a className="fancy-link" href="#">JavaScript</a></td>
                                <td><a className="fancy-link" href="#">Redux</a></td>
                                <td><a className="fancy-link" href="#"></a></td>
                            </tr>
                            <tr>
                                <td><a className="fancy-link" href="https://github.com/everdein">Github</a></td>
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