export interface ChannelProfile {
  id: string;
  name: string;
  description: string;
  configurations: {
    preChatSurvey: boolean;
    postChatSurvey: boolean;
    fileAttachments: boolean;
    customerWaitTime: string;
    autoCloseAfterInactivity: string;
    conversationMode: string;
    authenticatedChat: boolean;
  };
}

export const channelProfilesData: ChannelProfile[] = [
  {
    id: '1',
    name: 'Default channel profile',
    description: 'Standard configuration for general chat channels',
    configurations: {
      preChatSurvey: true,
      postChatSurvey: false,
      fileAttachments: true,
      customerWaitTime: '5 minutes',
      autoCloseAfterInactivity: '30 minutes',
      conversationMode: 'Live Agent',
      authenticatedChat: false
    }
  },
  {
    id: '2',
    name: 'Custom channel profile',
    description: 'Customized configuration with extended features',
    configurations: {
      preChatSurvey: true,
      postChatSurvey: true,
      fileAttachments: true,
      customerWaitTime: '10 minutes',
      autoCloseAfterInactivity: '45 minutes',
      conversationMode: 'Hybrid',
      authenticatedChat: true
    }
  },
  {
    id: '3',
    name: 'QEA channel profile',
    description: 'Configuration optimized for QEA channels',
    configurations: {
      preChatSurvey: false,
      postChatSurvey: true,
      fileAttachments: false,
      customerWaitTime: '3 minutes',
      autoCloseAfterInactivity: '15 minutes',
      conversationMode: 'Live Agent',
      authenticatedChat: true
    }
  },
  {
    id: '4',
    name: 'Bot channel profile',
    description: 'Configuration for bot-assisted chat channels',
    configurations: {
      preChatSurvey: false,
      postChatSurvey: false,
      fileAttachments: true,
      customerWaitTime: '1 minute',
      autoCloseAfterInactivity: '20 minutes',
      conversationMode: 'Bot-first',
      authenticatedChat: false
    }
  },
  {
    id: '5',
    name: 'CIA channel profile',
    description: 'Configuration for CIA-specific channels',
    configurations: {
      preChatSurvey: true,
      postChatSurvey: true,
      fileAttachments: false,
      customerWaitTime: '7 minutes',
      autoCloseAfterInactivity: '60 minutes',
      conversationMode: 'Live Agent',
      authenticatedChat: true
    }
  },
  {
    id: '6',
    name: 'Test channel profile',
    description: 'Configuration for testing purposes',
    configurations: {
      preChatSurvey: false,
      postChatSurvey: false,
      fileAttachments: true,
      customerWaitTime: '2 minutes',
      autoCloseAfterInactivity: '10 minutes',
      conversationMode: 'Live Agent',
      authenticatedChat: false
    }
  }
];
