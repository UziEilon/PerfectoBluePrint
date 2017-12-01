# NigthWatch

In this example you can find how to connect NightWatch to Perrfecto
how does it work:
        * Under **/tests** folder you can find two Selenium test on google
        * The nightwatch.json contains the configuration to
            * connect to Perfecto ( add your cloud , user and password)
            * execute it on two devices in parallel 
            
How to add a devices:
    * Add the following to **nightwatch.json**
    ```
    "ios": {
    "desiredCapabilities": {
    "user": "[Your Cloud User]",
    "password": "[Your Cloud Password]",
    "browserName": "mobileOS",
    "deviceName": "DeviceID"
    }
    ```
