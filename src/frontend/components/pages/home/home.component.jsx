import React, { Component, Fragment } from 'react';
import { Link } from '../../link';

// import './home.style.css';

export default class HomeComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className={ 'container' }>
                    <article className={ 'flex-lg-9' }>
                        <section className={ 'container' }>
                            <div className={ 'flex-lg-6' }>
                                <h2> Content 1: Flex 6 </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam iusto atque rem ad eius qui deleniti praesentium distinctio quisquam vero, modi mollitia dignissimos!Odio veniam excepturi cupiditate quibusdam sunt ullam.
                                </p>
                            </div>

                            <div className={ 'flex-lg-6' }>
                                <h2> Content 2: Flex 6 </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam iusto atque rem ad eius qui deleniti praesentium distinctio quisquam vero, modi mollitia dignissimos!Odio veniam excepturi cupiditate quibusdam sunt ullam.
                                </p>
                            </div>
                        </section>

                        <section className="container">
                            <div className="flex-lg-12">
                                <h2> Content 3: Flex 12 </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.Culpa mollitia repudiandae eos fugiat voluptate praesentium!Molestiae quae dolorem vel ipsam ratione magnam ducimus aut harum cum nobis ? Esse, libero possimus!
                                    Illum blanditiis at culpa sint enim non beatae odit, temporibus cumque quae.Hic, iusto ipsum.Dolorum ratione illo dolor, ex sapiente dignissimos.Voluptates voluptatem, deserunt perspiciatis quis harum consequatur eligendi.Cumque, amet.Adipisci amet nostrum at nesciunt dolorem temporibus.Sed doloremque accusamus quos, optio error praesentium id officia voluptate ipsum aut vero voluptas non odio ratione molestias voluptatibus ? Dignissimos, dolore!
                                </p>
                            </div>
                        </section>

                        <section className={ 'container' }>
                            <div className="flex-lg-3">
                                <div className="card">
                                    <div className="card-header text-center">Simple Card </div>
                                    <div className="card-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestiae aliquid provident blanditiis itaque!Eaque voluptas adipisci provident quae, nemo praesentium quidem expedita, sint repellendus consequuntur nobis reiciendis voluptatem neque.Doloribus.
                                    </div>
                                </div>
                            </div>
                            <div className="flex-lg-3">
                                <div className="card">
                                    <div className="card-header">Simple Card</div>
                                    <div className="card-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestiae aliquid provident blanditiis itaque!Eaque voluptas adipisci provident quae, nemo praesentium quidem expedita, sint repellendus consequuntur nobis reiciendis voluptatem neque.Doloribus.
                                    </div>
                                </div>
                            </div>
                            <div className="flex-lg-3">
                                <div className="card">
                                    <div className="card-header">Simple Card</div>
                                    <div className="card-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestiae aliquid provident blanditiis itaque!Eaque voluptas adipisci provident quae, nemo praesentium quidem expedita, sint repellendus consequuntur nobis reiciendis voluptatem neque.Doloribus.
                                    </div>
                                    <div className="card-footer">
                                        <Link
                                            linkHref={ '#' }
                                            className={ 'btn' }
                                        >
                                            Link 1
                                        </Link>
                                        <Link
                                            linkHref={ '#' }
                                            className={ 'btn' }
                                        >
                                            Link 2
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>

                    <aside className={ 'flex-lg-3' }>
                        <h2> Aside area... </h2> </aside> </div> </Fragment>
        );
    }
}