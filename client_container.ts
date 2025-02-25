import { createConfiguration } from './spec/configuration.ts';
import { ContainerApiRequestFactory } from './spec/apis/ContainerApi.ts'

/*
import * as your_api from 'your_api_package'

// Covers all auth methods included in your OpenAPI yaml definition
const authConfig: your_api.AuthMethodsConfiguration = {
    "api_key": "YOUR_API_KEY"
}

// Implements a simple middleware to modify requests before (`pre`) they are sent
// and after (`post`) they have been received
class Test implements your_api.Middleware {
    pre(context: your_api.RequestContext): Promise<your_api.RequestContext> {
        // Modify context here and return
        return Promise.resolve(context);
    }

    post(context: your_api.ResponseContext): Promise<your_api.ResponseContext> {
        return Promise.resolve(context);
    }

}

// Create configuration parameter object
const configurationParameters = {
    httpApi: new your_api.JQueryHttpLibrary(), // Can also be ignored - default is usually fine
    baseServer: your_api.servers[0], // First server is default
    authMethods: authConfig, // No auth is default
    promiseMiddleware: [new Test()],
}

// Convert to actual configuration
const config = your_api.createConfiguration(configurationParameters);

// Use configuration with your_api
const api = new your_api.PetApi(config);
your_api.Pet p = new your_api.Pet();
p.name = "My new pet";
p.photoUrls = [];
p.tags = [];
p.status = "available";
Promise<your_api.Pet> createdPet = api.addPet(p);

```



*/
const containerApi = new ContainerApiRequestFactory();

containerApi.containerCreate({

});
containerApi.containerAttachWebsocket('da244cbbf028246101bdf62433eb98ee66712064532619e26e92939c29773729')
