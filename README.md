# LetsChat

LetsChat is a robust real-time messaging platform utilizing React.js and Next.js. It facilitates instant communication between users across diverse servers and channels. It is built with Next.js 14, React, Socket.IO, Prisma, Tailwind, and MySQL.

![Real-time Messaging](screenshots/overview.png)

## Live Demo

Feel free to register and try it out: [Live Demo](https://discord-clone-production-76b6.up.railway.app)

## Features

- **Real-time Messaging**: Utilizing Socket.IO, LetsChat provides real-time messaging capabilities, enabling users to communicate instantly.
- **Attachment Support**: Users can send attachments as messages using UploadThing, enhancing the communication experience.
- **Message Editing & Deletion**: Edit and delete messages in real-time, ensuring users have control over their conversations.
- **Multi-channel Communication**: Create text, audio, and video call channels to accommodate diverse communication needs.
- **1:1 Conversations**: Engage in private one-on-one conversations with other members.
- **Video Calls**: Initiate one-on-one video calls between members for face-to-face communication.
- **Member Management**: Maintain control over your server with features like kick, role change (guest/moderator), and unique invite link generation.
- **Infinite Message Loading**: Effortlessly browse through message history with infinite loading in batches of 10, courtesy of tanstack/query.
- **Server Customization**: Customize and manage servers to tailor your communication environment to your preferences.
- **Beautiful UI**: LetsChat boasts a sleek and responsive user interface crafted with TailwindCSS and ShadcnUI, ensuring an aesthetically pleasing experience across devices.
- **Light/Dark Mode**: Seamlessly switch between light and dark modes to suit your preference.
- **Websocket Fallback**: Ensures continuous communication with websocket fallback and polling with alerts.
- **ORM with Prisma**: Streamline database interactions with Prisma, facilitating efficient data management.
- **MySQL Database**: Utilizes Aiven's MySQL database for scalable and reliable data storage.
- **Authentication with Clerk**: Securely authenticate users with Clerk, ensuring the integrity of your communication platform.

## Technologies Used

- React.js
- Next.js 14
- Socket.IO
- Prisma
- TailwindCSS
- MySQL
- Clerk

## Visual Overview

### You can share screen or face time with others in the video channels, or voice chatting in the voice channels.

![Real-time Messaging](screenshots/shareScreen.png)

### As an admin or moderator, you can manage or kick members in the serever.

![Real-time Messaging](screenshots/manageRoles.png)

### As an admin or moderator, you can also create new channels in the server.

![Real-time Messaging](screenshots/createChannel.png)

### Created new channel:

![Real-time Messaging](screenshots/createdNewChannel.png)

### You can invite other people with the randomly generated invite link if you are the admin or moderator. You can always generate a new link at any time.

![Real-time Messaging](screenshots/inviteLink.png)

### Light/Dark mode change by clicking on the bottom left icon.

![Real-time Messaging](screenshots/darkMode.png)

### You can edit your message by clicking on the icon to the right of the message.

![Real-time Messaging](screenshots/editMessage.png)

### Other user can see the change at real time and the message will be marked as "edited"

![Real-time Messaging](screenshots/editedMessage.png)

### You can even delete your message, at real time of course.

![Real-time Messaging](screenshots/deleteMessage.png)

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/shuyangConnor/LetsChat.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=


DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add MySQL Database (I used Aiven)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).

Your feedback and contributions are greatly appreciated!!
