# eGlu Utils

##### CLI application for day to day eGlu Tasks.

## Installaltions :

1. Clone this repo.
2. Go to the directory of the repo.
3. `npm install -g .`

This will install the tool globally in your machine. Please note that you need to have NodeJS installed on your machine.

Once done, you can run the application from anywhere by `eglu` command.

## Tools :

This comes with different set of tools. Following are the currently supported ones.

1. `mongo`

You can select the tool by `eglu --tool mongo <rest of the command>`

## Mongo Tool :

##### Sub Commands:

1. `h2d <MongoDB Object ID>` : It will give you the Big Integer. Example `eglu --tool mongo h2d 62a335bd6fdb3642ef6a477`. If you are providing the MongoDB ID with `ObjectId` then it has to be wrapped around double quotes, like `eglu --tool mongo h2d "ObjectId("62a335bd6fdb3642ef6a477")"`
2. `d2h <Big Integer>` : It will give you the MongoDB Object ID. Example `eglu --tool mongo d2h 30526839651007318932029327218`
