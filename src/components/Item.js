import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
    render() {
        return (
            <li>
                {this.props.node.description}
                <ul>
                    {this.props.node.children.map((list, index) =>
                        <li key={index}>
                            {list.node.description}
                            <ul>
                                {list.node.children.map((list, index) =>
                                    <li key={index}>
                                        {list.node.description}
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </li>
        );
    }
}