const path = require("path");
const { App, Stack } = require("@aws-cdk/core");
const {} = require("@aws-cdk/aws-lambda");
const { NodejsFunction } = require("@aws-cdk/aws-lambda-nodejs");

const resolveRoot = (rootPath) => path.resolve(__dirname, "..", rootPath);

class MyStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const entry = resolveRoot("packages/my-handler/index.js");
    new NodejsFunction(this, "Handler", { entry });
  }
}

const app = new App();

new MyStack(app, "MyStack", {});

app.synth();
