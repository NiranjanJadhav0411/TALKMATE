export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Rohit Sharma",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Virat Kohli",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Rohit Sharma",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "Virat Kohli",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Rohit Sharma",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Virat Kohli",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Message aa gaya",
    _id: "abcdefghijklmn",
    sender: {
      _id: "user._id",
      name: "Aman",
    },
    chat: "chatId",
    createdAt: "2024-03-08T00:00:00.000Z",
  },

  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "abcdefghiddjklmn",
    sender: {
      _id: "sdfsdfsdf",
      name: "Aman 2",
    },
    chat: "chatId",
    createdAt: "2024-03-08T00:00:00.000Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Rohit Sharma",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "rohit_sharma",
      friends: 20,
      groups: 5,
    },
    {
      name: "Virat Kohli",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "virat_kohli",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "Coding Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Rohit Sharma",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Coders Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Virat Kohli",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Message aa gaya",
      _id: "RS",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Aman",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-03-08T00:00:00.000Z",
    },

    {
      attachments: [
        {
          public_id: "asdsad 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "VK",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Aman 2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-03-08T00:00:00.000Z",
    },
  ],
};
