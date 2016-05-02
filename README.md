# bootstrap-feedback-panel
A generic feedback panel to be used with Bootstrap UI library and React.

# Installation

```
npm i --save bootstrap-feedback-panel
```

# Usage

Import the panel, and then build it with an array of messages. Each message
must have a type and a message. At the moment, the only allowed types are **INFO** and **ERROR**.

```
const messages = [
	{type: "INFO", text: MESSAGE},
	{type: "ERROR", text: MESSAGE}
];

<PanelMessages messages={messages}/>
```

and that's it.

# Author
@luispablo
