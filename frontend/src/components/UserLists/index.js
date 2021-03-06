import React, {Component} from "react";

import ListComponent from "../ListComponent";

export default class UserLists extends React.Component {
    state = {
        lists: [],
        loading: true,
    }

    async componentDidMount() {
        //passando token
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 47593647e0f4d3736bf78a92a30fc2a4bb78600d'

        //padrao
        const url = 'http://127.0.0.1:8000/list/';

        const response = await fetch(url, config);

        const data = await response.json()
        console.log(data)
        this.setState({
            lists: data,
            loading: false
        })

    }


    render() {
        const listsApi = this.state.lists

        return (
            <div>

                {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set}/>)}
            </div>
        )
    }
}