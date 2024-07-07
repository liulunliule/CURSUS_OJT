import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
function Course_detail_about() {
    return (
        <div className="course_detail_about">
            <div className="course_detail_about-requirements">
                <h3 className="course_detail_about-requirements-title">
                    Requirements
                </h3>
                <div className="course_detail_about-requirements-content">
                    <ul>
                        <li>Have a computer with Internet</li>
                        <li>
                            Be ready to learn an insane amount of awesome stuff
                        </li>
                        <li>Prepare to build real web apps!</li>
                    </ul>
                </div>
            </div>

            <div className="course_detail_about-description">
                <h3 className="course_detail_about-description-title">
                    Description
                </h3>

                <div className="course_detail_about-description-content">
                    <p className="intro">
                        Just updated to include Bootstrap 4.1.3!
                    </p>
                    <p className="intro_content">
                        Hi! Welcome to the Web Developer Bootcamp, the only
                        course you need to learn web development. There are a
                        lot of options for online developer training, but this
                        course is without a doubt the most comprehensive and
                        effective on the market. Here's why:
                    </p>
                    <ul className="content-list">
                        <li className="content-item">
                            This is the only online course taught by a
                            professional bootcamp instructor.
                        </li>
                        <li className="content-item">
                            94% of my in-person bootcamp students go on to get
                            full-time developer jobs. Most of them are complete
                            beginners when I start working with them.
                        </li>
                        <li className="content-item">
                            The previous 2 bootcamp programs that I taught cost
                            $14,000 and $21,000. This course is just as
                            comprehensive but with brand new content for a
                            fraction of the price.
                        </li>
                        <li className="content-item">
                            Everything I cover is up-to-date and relevant to
                            today's developer industry. No PHP or other dated
                            technologies. This course does not cut any corners.
                        </li>
                        <li className="content-item">
                            This is the only complete beginner full-stack
                            developer course that covers NodeJS.
                        </li>
                        <li className="content-item">
                            We build 13+ projects, including a gigantic
                            production application called YelpCamp. No other
                            course walks you through the creation of such a
                            substantial application.
                        </li>
                        <li className="content-item">
                            The course is constantly updated with new content,
                            projects, and modules. Think of it as a subscription
                            to a never-ending supply of developer training.
                        </li>
                    </ul>
                    <p className="intro_desc">
                        When you're learning to program you often have to
                        sacrifice learning the exciting and current technologies
                        in favor of the "beginner friendly" classes. With this
                        course, you get the best of both worlds. This is a
                        course designed for the complete beginner, yet it covers
                        some of the most exciting and relevant topics in the
                        industry.
                    </p>
                    <p className="about_description-technologies">
                        Throughout the course we cover tons of tools and
                        technologies including:
                    </p>
                    <ul className="technologies_list">
                        <li className="technologies_item">
                            <strong>HTML5</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>CSS3</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>JavaScript</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>Bootstrap 4</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>SemanticUI</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>DOM Manipulation</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>jQuery</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>Unix(Command Line) Commands</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>NodeJS</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>NPM</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>ExpressJS</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>REST</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>MongoDB</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>Database Associations</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>Authentication</strong>
                        </li>
                        <li className="technologies_item">
                            <strong>PassportJS</strong>{" "}
                        </li>
                        <li className="technologies_item">
                            <strong>Authorization</strong>
                        </li>
                    </ul>

                    <p>
                        This course is also unique in the way that it is
                        structured and presented. Many online courses are just a
                        long series of "watch as I code" videos. This course is
                        different. I've incorporated everything I learned in my
                        years of teaching to make this course not only more
                        effective but more engaging. The course includes:
                    </p>
                    <ul className="subject_list">
                        <li>Lectures</li>
                        <li>Code-Alongs</li>
                        <li>Projects</li>
                        <li>Exercises</li>
                        <li>Research Assignments</li>
                        <li>Slides</li>
                        <li>Downloads</li>
                        <li>Readings</li>
                    </ul>
                    <p>
                        If you have any questions, please don't hesitate to
                        contact me. I got into this industry because I love
                        working with people and helping students learn. Sign up
                        today and see how fun, exciting, and rewarding web
                        development can be!
                    </p>
                </div>
            </div>

            <div className="course_detail_about-courseFor">
                <h3>Who this course is for :</h3>

                <ul className="courseFor-list">
                    <li>
                        This course is for anyone who wants to learn about web
                        development, regardless of previous experience
                    </li>
                    <li>
                        It's perfect for complete beginners with zero experience
                    </li>
                    <li>
                        It's also great for anyone who does have some experience
                        in a few of the technologies(like HTML and CSS) but not
                        all
                    </li>
                    <li>
                        If you want to take ONE COURSE to learn everything you
                        need to know about web development, take this course
                    </li>
                </ul>
            </div>

            <div className="course_detail_about-learn">
                <h3>What you'll learn</h3>
                <div className="learn_list">
                    <ul className="learn_list-left">
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Maecenas
                            ultricies felis in pulvinar blandit.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> LIn hac
                            habitasse platea dictumst. Aenean vel fermentum
                            neque.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Nullam non
                            lacus nibh. Etiam et fringilla neque, ut vulputate
                            sapien. Sed vitae tortor gravida, interdum felis at,
                            pulvinar enim. Integer tempor urna leo.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Phasellus
                            ultrices tellus sed volutpat vestibulum. Curabitur
                            aliquet dictum leo non congue.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Suspendisse
                            semper feugiat urna dictum interdum.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Donec
                            ultricies elit porttitor, ultrices enim a, commodo
                            dolor.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Maecenas
                            pharetra mi quis nisl mollis, molestie imperdiet
                            lorem molestie.
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Praesent ac
                            libero consequat, efficitur tortor et, interdum sem.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                        </li>
                    </ul>
                    <ul className="learn_list-right">
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Donec
                            ultricies elit porttitor, ultrices enim a, commodo
                            dolor.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Nunc
                            dapibus ligula sed justo porta, id volutpat odio
                            iaculis..
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Maecenas
                            pharetra mi quis nisl mollis, molestie imperdiet
                            lorem molestie.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Praesent ac
                            libero consequat, efficitur tortor et, interdum sem.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Nullam non
                            lacus nibh. Etiam et fringilla neque, ut vulputate
                            sapien. Sed vitae tortor gravida, interdum felis at,
                            pulvinar enim. Integer tempor urna leo.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Phasellus
                            ultrices tellus sed volutpat vestibulum. Curabitur
                            aliquet dictum leo non congue.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> In hac
                            habitasse platea dictumst. Aenean vel fermentum
                            neque.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Suspendisse
                            semper feugiat urna dictum interdum.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleCheck} /> Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Course_detail_about;
