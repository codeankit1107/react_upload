import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const navigationmenu = [
    {
        id: 1,
        linkText: 'Virtual values',
       
                link: '/',
               
        
    },

    {
        id: 2,
        linkText: 'Features',
       
    },
    {
        id: 4,
        linkText: 'Solutions',
        child: true,
        submenu: [
            {
                id: 41,
                link: '/blogstandard',
                linkText: 'Blog Standard'
            },
            {
                id: 42,
                link: '/bloggrid',
                linkText: 'Blog Grid'
            },
            {
                id: 43,
                link: '/blogdetail',
                linkText: 'Blog Details'
            },
        ]
    },
    {
        id: 5,
        linkText: 'Customer',
        child: true,
        submenu: [
            {
                id: 51,
                link: '/portfolio',
                linkText: 'Portfolio'
            },
            {
                id: 52,
                link: '/portfoliotwo',
                linkText: 'Portfolio Two'
            },
            {
                id: 53,
                link: '/portfoliodetail',
                linkText: 'Portfolio Details'
            },
        ]
    },
    {
        id: 6,
        linkText: 'Resourses',
        child: true,
        submenu: [
            {
                id: 61,
                link: '/shop',
                linkText: 'Shop'
            },
            {
                id: 62,
                link: '/shopdetail',
                linkText: 'Product Details'
            },
        ]
    },
    {
        id: 7,
        linkText: 'Contact',
        link: '/contact'
    },
];
class Navmenu extends Component {
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
        }
    }
    componentDidMount() {
        $('.nav-menu li a').each(function () {
            if ($(this).next().length > 0) {
                $(this)
                    .parent('li')
                    .append(
                        '<span class="dd-trigger"><i class="fal fa-angle-down"></i></span>'
                    );
            }
        });
    }
    render() {
        return (
            <ul>
                {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                    <li key={i} className={`${item.child ? 'has-submemu' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`${sub_item.child ? 'has-submemu' : ''} `}>
                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="submenu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        );
    }
}

export default Navmenu;