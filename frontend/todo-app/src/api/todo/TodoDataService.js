import React, { Component } from 'react';
import axios from 'axios';

class TodoDataService extends Component {
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:8081/users/${name}/todos/`);
  }

  retrieveTodo(name, id) {
    return axios.get(`http://localhost:8081/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    return axios.delete(`http://localhost:8081/users/${name}/todos/${id}`);
  }
}

export default new TodoDataService();
