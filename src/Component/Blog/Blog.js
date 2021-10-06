import React from 'react';
import './Blog.css'




const Blog = () => {

    return (
        <div>
            <h3 className='bg-warning p-5 '>Our-Blog</h3>
            <h1>Our Client Says:</h1>
            <div className='bloging'>
                {/* bloging */}
                <div className='border border-warning m-3 '>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nemo facilis assumenda alias, ullam tenetur asperiores quos commodi accusamus praesentium, iure quis voluptate minus. Neque facere blanditiis explicabo, facilis ratione cumque dolorum debitis ipsam doloribus, deleniti enim a laborum. Quasi impedit atque odio! Consequuntur ipsam, est architecto similique eius cupiditate.</p>

                </div>
                <div className='border border-warning m-3 '>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dicta. Animi pariatur deserunt facere nesciunt consectetur, dolore dignissimos voluptatum quasi velit cumque esse ducimus iusto error, voluptatibus placeat magnam optio cupiditate amet ipsam accusantium nisi nam! Dicta nisi, repellat aliquid repellendus ducimus, est quisquam ipsum incidunt, a natus odit. Saepe.</p>
                </div>
                <div className='border border-warning m-3 '>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea pariatur temporibus, qui beatae, enim ratione facere repellat dolorem praesentium cum eius labore accusantium maiores tempore deleniti. Pariatur ex temporibus veritatis quas nulla natus illum, beatae esse? Magni dolorem sit, labore corporis ad asperiores distinctio recusandae aliquid eligendi, debitis quisquam laudantium.</p>
                </div>
                <div className='border border-warning m-3 '>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, animi. Molestias ratione esse blanditiis inventore dicta eaque mollitia, eius temporibus magnam vel expedita ducimus nihil dolore debitis, dolor dignissimos! Tempore nihil alias, id, ex explicabo quaerat voluptatem illum sed iste ducimus labore nobis neque quibusdam quisquam recusandae dolores distinctio earum.</p>
                </div>

            </div>
            <div className='border borde-3 p-3 m-2'>
                <input type="text" placeholder='subscribe' />
                <button className='btn btn-warning'>Subscribe</button>
            </div>
        </div>
    );
};

export default Blog;