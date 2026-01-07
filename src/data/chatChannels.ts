export interface ChatChannel {
  id: string;
  channelName: string;
  channelProfile: string;
  routingProfile: string;
  owner: string;
  createdOn: string;
}

export const chatChannelsData: ChatChannel[] = [
  {
    id: '1',
    channelName: 'Contact center chat channel',
    channelProfile: 'Default channel profile',
    routingProfile: 'Default routing profile',
    owner: 'Aurora365 User6',
    createdOn: '9/10/2025 1:30 PM'
  },
  {
    id: '2',
    channelName: 'swatichat2',
    channelProfile: 'Custom channel profile',
    routingProfile: 'Standard routing profile',
    owner: 'Aurora365 User6',
    createdOn: '8/14/2025 4:44 PM'
  },
  {
    id: '3',
    channelName: 'QEA Chat Channel',
    channelProfile: 'QEA channel profile',
    routingProfile: 'Test routing profile',
    owner: 'Aurora365 User6',
    createdOn: '8/19/2025 6:28 PM'
  },
  {
    id: '4',
    channelName: 'swatiIntentTest',
    channelProfile: 'Custom channel profile',
    routingProfile: 'Standard routing profile',
    owner: 'Aurora365 User6',
    createdOn: '8/1/2025 12:32 PM'
  },
  {
    id: '5',
    channelName: 'TestChat',
    channelProfile: 'Default channel profile',
    routingProfile: 'Default routing profile',
    owner: 'Aurora365 User6',
    createdOn: '8/5/2025 1:32 PM'
  },
  {
    id: '6',
    channelName: 'chat101',
    channelProfile: 'Test channel profile',
    routingProfile: 'Test routing profile',
    owner: 'Aurora365 User6',
    createdOn: '8/7/2025 5:00 PM'
  },
  {
    id: '7',
    channelName: 'Chat Channel',
    channelProfile: 'Default channel profile',
    routingProfile: 'Default routing profile',
    owner: 'Aurora365 User6',
    createdOn: '7/22/2025 12:23 AM'
  },
  {
    id: '8',
    channelName: 'Copilot-Deflection',
    channelProfile: 'Bot channel profile',
    routingProfile: 'Digital routing profile',
    owner: 'Aurora365 User6',
    createdOn: '10/10/2025 1:59 AM'
  },
  {
    id: '9',
    channelName: 'CIA-M-Deflection',
    channelProfile: 'CIA channel profile',
    routingProfile: 'Deflection routing profile',
    owner: 'Aurora365 User6',
    createdOn: '10/10/2025 1:01 AM'
  },
  {
    id: '10',
    channelName: 'CIA-M-PN-LetsChat',
    channelProfile: 'CIA channel profile',
    routingProfile: 'PN routing profile',
    owner: 'Aurora365 User6',
    createdOn: '11/19/2025 11:19 AM'
  },
  {
    id: '11',
    channelName: 'ClemChat',
    channelProfile: 'Custom channel profile',
    routingProfile: 'Custom routing profile',
    owner: 'Aurora365 User6',
    createdOn: '11/27/2025 3:20 AM'
  }
];
