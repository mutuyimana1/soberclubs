import React, { useEffect, useState } from 'react';
import { Table, Select, Radio, Typography, Space } from 'antd';
import axios from 'axios';
import './RegisteredUsers.css'; // Importing custom CSS

const { Option } = Select;
const { Title } = Typography;

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [studyMode, setStudyMode] = useState('all'); // Default: all study modes
  const [programType, setProgramType] = useState('all'); // Default: all programs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sober-backend-dushimiman.onrender.com/api/registrations');
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially show all users
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = users;

    if (studyMode !== 'all') {
      filtered = filtered.filter(user => user.modeOfStudy === studyMode);
    }

    if (programType !== 'all') {
      filtered = filtered.filter(user => user.programOfStudy === programType);
    }

    setFilteredUsers(filtered);
  }, [studyMode, programType, users]);

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Mode of Study',
      dataIndex: 'modeOfStudy',
      key: 'modeOfStudy',
    },
    {
      title: 'Program of Study',
      dataIndex: 'programOfStudy',
      key: 'programOfStudy',
    },
    {
      title: 'Languages',
      dataIndex: 'languages',
      key: 'languages',
      render: (languages) => languages.join(', '),
    },
    {
      title: 'Trainings',
      dataIndex: 'trainings',
      key: 'trainings',
      render: (trainings) => trainings.join(', '),
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
  ];

  return (
    <div className="registered-users">
      <Title level={2}>Registered Users</Title>

      <div className="filter-container">
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <Radio.Group
            value={studyMode}
            onChange={e => setStudyMode(e.target.value)}
          >
            <Radio.Button value="all">All Modes</Radio.Button>
            <Radio.Button value="online">Online</Radio.Button>
            <Radio.Button value="faceToFace">Face to Face</Radio.Button>
          </Radio.Group>

          <Select
            value={programType}
            onChange={value => setProgramType(value)}
            style={{ width: '200px' }}
          >
            <Option value="all">All Programs</Option>
            <Option value="day">Day</Option>
            <Option value="evening">Evening</Option>
            <Option value="weekend">Weekend</Option>
          </Select>
        </Space>
      </div>

      <Table dataSource={filteredUsers} columns={columns} rowKey="_id" />
    </div>
  );
};

export default RegisteredUsers;
