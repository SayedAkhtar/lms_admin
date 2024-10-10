export type Lead = {
  id: number;
  name: string;
  registered_mobile: string;
  registered_email: string;
  city: string;
  state: string;
  primary_registration_campaign: string;
  user_registration_date: string;
};
export const Leads = [
  {
    id: 1,
    name: 'John Doe',
    registered_mobile: '1234567890',
    registered_email: 'qkKp9@example.com',
    city: 'New York',
    state: 'NY',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-01-01'
  },
  {
    id: 2,
    name: 'Jane Doe',
    registered_mobile: '1234567890',
    registered_email: 'qkKp9@example.com',
    city: 'New York',
    state: 'NY',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-01-01'
  },
  {
    id: 3,
    name: 'Bob Smith',
    registered_mobile: '1234567890',
    registered_email: 'qkKp9@example.com',
    city: 'New York',
    state: 'NY',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-01-01'
  },
  {
    id: 4,
    name: 'Alice Johnson',
    registered_mobile: '1234567890',
    registered_email: 'qkKp9@example.com',
    city: 'New York',
    state: 'NY',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-01-01'
  },
  {
    id: 5,
    name: 'Charlie Brown',
    registered_mobile: '1234567890',
    registered_email: 'qkKp9@example.com',
    city: 'New York',
    state: 'NY',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-01-01'
  },
  {
    id: 6,
    name: 'David Brown',
    registered_mobile: '1234567890',
    registered_email: 'qkKp9@example.com',
    city: 'New York',
    state: 'NY',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-01-01'
  },
  {
    id: 7,
    name: 'Emily Chen',
    registered_mobile: '9876543210',
    registered_email: 'eGp8@example.com',
    city: 'Los Angeles',
    state: 'CA',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2022-02-15'
  },
  {
    id: 8,
    name: 'Michael Lee',
    registered_mobile: '5551234567',
    registered_email: 'mL4@example.com',
    city: 'Chicago',
    state: 'IL',
    primary_registration_campaign: 'Campaign 3',
    user_registration_date: '2022-03-20'
  },
  {
    id: 9,
    name: 'Sophia Patel',
    registered_mobile: '1112223333',
    registered_email: 'sP2@example.com',
    city: 'Houston',
    state: 'TX',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-04-10'
  },
  {
    id: 10,
    name: 'Olivia Kim',
    registered_mobile: '4445556666',
    registered_email: 'oK5@example.com',
    city: 'Phoenix',
    state: 'AZ',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2022-05-25'
  },
  {
    id: 11,
    name: 'William White',
    registered_mobile: '7778889999',
    registered_email: 'wW3@example.com',
    city: 'Philadelphia',
    state: 'PA',
    primary_registration_campaign: 'Campaign 3',
    user_registration_date: '2022-06-15'
  },
  {
    id: 12,
    name: 'Ava Martin',
    registered_mobile: '3334445555',
    registered_email: 'aM9@example.com',
    city: 'San Antonio',
    state: 'TX',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-07-10'
  },
  {
    id: 13,
    name: 'Ethan Hall',
    registered_mobile: '6667778888',
    registered_email: 'eH1@example.com',
    city: 'San Diego',
    state: 'CA',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2022-08-20'
  },
  {
    id: 14,
    name: 'Liam Brooks',
    registered_mobile: '9990001111',
    registered_email: 'lB8@example.com',
    city: 'Dallas',
    state: 'TX',
    primary_registration_campaign: 'Campaign 3',
    user_registration_date: '2022-09-15'
  },
  {
    id: 15,
    name: 'Mia Garcia',
    registered_mobile: '2223334444',
    registered_email: 'mG6@example.com',
    city: 'San Jose',
    state: 'CA',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2022-10-10'
  },
  {
    id: 16,
    name: 'Noah Taylor',
    registered_mobile: '8889990000',
    registered_email: 'nT4@example.com',
    city: 'Austin',
    state: 'TX',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2022-11-20'
  },
  {
    id: 17,
    name: 'Isabella Davis',
    registered_mobile: '5556667777',
    registered_email: 'iD7@example.com',
    city: 'Jacksonville',
    state: 'FL',
    primary_registration_campaign: 'Campaign 3',
    user_registration_date: '2022-12-15'
  },
  {
    id: 18,
    name: 'Alexander Russell',
    registered_mobile: '7778889999',
    registered_email: 'aR2@example.com',
    city: 'San Francisco',
    state: 'CA',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2023-01-10'
  },
  {
    id: 19,
    name: 'Charlotte Brown',
    registered_mobile: '3334445555',
    registered_email: 'cB9@example.com',
    city: 'Indianapolis',
    state: 'IN',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2023-02-20'
  },
  {
    id: 20,
    name: 'Benjamin Lee',
    registered_mobile: '9990001111',
    registered_email: 'bL5@example.com',
    city: 'Columbus',
    state: 'OH',
    primary_registration_campaign: 'Campaign 3',
    user_registration_date: '2023-03-15'
  },
  {
    id: 21,
    name: 'Abigail Martin',
    registered_mobile: '6667778888',
    registered_email: 'aM1@example.com',
    city: 'Fort Worth',
    state: 'TX',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2023-04-10'
  },
  {
    id: 22,
    name: 'Caleb Kim',
    registered_mobile: '4445556666',
    registered_email: 'cK8@example.com',
    city: 'Charlotte',
    state: 'NC',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2023-05-20'
  },
  {
    id: 23,
    name: 'Julian Hall',
    registered_mobile: '1112223333',
    registered_email: 'jH4@example.com',
    city: 'Memphis',
    state: 'TN',
    primary_registration_campaign: 'Campaign 3',
    user_registration_date: '2023-06-15'
  },
  {
    id: 24,
    name: 'Avery Patel',
    registered_mobile: '7778889999',
    registered_email: 'aP7@example.com',
    city: 'Boston',
    state: 'MA',
    primary_registration_campaign: 'Campaign 1',
    user_registration_date: '2023-07-10'
  },
  {
    id: 25,
    name: 'Elijah Brooks',
    registered_mobile: '5556667777',
    registered_email: 'eB3@example.com',
    city: 'Baltimore',
    state: 'MD',
    primary_registration_campaign: 'Campaign 2',
    user_registration_date: '2023-08-20'
  }
];
