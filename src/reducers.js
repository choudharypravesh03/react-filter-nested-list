import { combineReducers } from 'redux';
import { SEARCH } from './actions';


let tree = [
            {
                node: {
                    id: 1,
                    description: "test1",
                    children: [
                        {
                            node: {
                                id: "1_1",
                                description: "test1_1",
                                children: [

                                ]
                            }
                        },
                        {
                            node: {
                                id: "1_2",
                                description: "test1_2",
                                children: [

                                ]
                            }
                        }
                    ]
                }
            },
            {
                node: {
                    id: 2,
                    description: "test2",
                    children: [
                        {
                            node: {
                                id: "2_1",
                                description: "test2_1",
                                children: [

                                ]
                            }
                        },
                        {
                            node: {
                                id: "2_2",
                                description: "test2_2",
                                children: [
                                    {
                                        node: {
                                            id: "2_2_1",
                                            description: "test2_2_1",
                                            children: [

                                            ]
                                        }
                                    },
                                    {
                                        node: {
                                            id: "2_2_2",
                                            description: "test2_2_2",
                                            children: [

                                            ]
                                        }
                                    },
                                ]
                            }
                        }
                    ]
                }
            }
        ]



function filter(array, search) {
    var result = [];
    array.forEach(function (a) {
        var temp = [],
            o = {
                node: {
                    id: 1,
                    description: "",
                    children: [

                    ]
                }
            },
            found = false;
        if (a.node.description.indexOf(search) !== -1) { //a.node.description === search
            o.node.id = a.node.id
            o.node.description = a.node.description;
            found = true;
        }
        if (Array.isArray(a.node.children)) {
            temp = filter(a.node.children, search);
            if (temp.length) {
                o.node.children = temp;
                found = true;
            }
        }
        if (found) {
            result.push(o);
        }
    });
    return result;
}


function filterList(state = tree, action) {

    console.log(action);

  switch (action.type) {
      case SEARCH:
            return filter(tree, action.text)
        default:
            return state;
  }
}

const filterApp = combineReducers({
    filterList
});

export default filterApp;