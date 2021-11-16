import axios from 'axios';

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get('http://localhost:8081/hello-world');
    // console.log('executed service');
  }

  executeHelloWorldBeanService() {
    return axios.get('http://localhost:8081/hello-world-bean');
  }

  executeHelloWorldPathVariableService(name, color, gender) {
    return axios.get(
      `http://localhost:8081/hello-world/path-variable/${name}+${color}+${gender}`
    );
  }
}

export default new HelloWorldService();
