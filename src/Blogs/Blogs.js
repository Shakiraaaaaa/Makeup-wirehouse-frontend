import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs'>
            <h1>Question one :  Difference between javascript and nodejs</h1>
            <h6>JavaScript is a simple programming language that runs on the JavaScript Engine in any browser. While Node JS is an interpreter or runtime environment for the JavaScript programming language, it requires libraries that can be easily accessible from JavaScript programming to make it more useful.
                For one online application, JavaScript is typically utilized for any client-side activities. An activity could be dealing with business validation, dynamic page display at a set time interval, or a simple Ajax request.</h6>
            <h1>Question two :  When should you use nodejs and when should you use mongodb</h1>
            <h6>NodeJS and MongoDB are two distinct technologies. MonogDB is a database system that allows you to efficiently store documents in a database and execute operations such as data updates and document searches based on certain criteria.

                The responsibility of NodeJS is to run your application.
            </h6>
            <h1>Question three :  Differences between sql and nosql databases.</h1>
            <h6>SQL databases scale vertically, but NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.
            </h6>

        </div>
    );
};

export default Blogs;