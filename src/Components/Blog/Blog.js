import React from 'react';

const Blog = () => {
    return (
        <div className='ml-14'>
            <h1 className='text-center text-3xl font-bold mt-6'> Blogs </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5'>
            <div>
                <h1 className='text-xl font-bold'>How will you improve the performance of a React Application?</h1>
               <p>1.Keeping component state local where necessary.</p>
               <p>2.Memoizing React components to prevent unnecessary re-renders..</p>
               <p>3.Code-splitting in React using dynamic import()</p>
               <p>Windowing or list virtualization in React.</p>
               <p>Lazy loading images in React.</p>
            </div>
            <div>
                <h1 className='text-xl font-bold'>What are the different ways to manage a state in a React application?</h1>
               <p>1.Local state..</p>
               <p>2.Global state.</p>
               <p>3.Server state.</p>
               <p>URL state.</p>
    
            </div>
            <div>
                <h1 className='text-xl font-bold'>How does prototypical inheritance work?</h1>
               <p>The Prototypal Inheritance is
                    a feature in javascript used to
                     add methods and properties in objects. It is
                      a method by which an object can inherit 
                      the properties and methods of another object.
                       Traditionally, in order to get and set the [[Prototype]] 
                       of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Why you do not set the state directly in React?</h1>
               <p>One should never update the 
                   state directly because of the
                    following reasons: If you update 
                    it directly, calling the setState()
                     afterward may just replace the update
                      you made. When you directly update the
                       state, it does not change this.</p>
            </div>
            <div>
                {/* blog title */}
                <h1 className='text-xl font-bold'>What is a unit test? Why should write unit tests?</h1>
               <p>Unit tests are typically automated tests
                    written and run by software developers
                     to ensure that a section of an application
                      (known as the "unit") meets its design and
                       behaves as intended. In procedural programming,
                        a unit could be an entire module, but it is more
                         commonly an individual function or procedure.</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;