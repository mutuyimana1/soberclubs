import React, { useEffect, useState } from 'react';
import { Table, Select, Radio, Spin } from 'antd';
import axios from 'axios';

const { Option } = Select;

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [studyMode, setStudyMode] = useState('all'); // Default: all study modes
  const [programType, setProgramType] = useState('all'); // Default: all programs
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get('https://sober-backend-dushimiman.onrender.com/api/registrations'); // Adjust the URL to your backend
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially show all users
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Failed to fetch registrations:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchData();
  }, []);

  // Filter users based on selected criteria
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

  // Columns for the table
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
      render: (trainings) => trainings.join(', '), // Adjust according to your data structure
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
    <div>
      <h2>Registered Users</h2>

      <div style={{ marginBottom: '16px' }}>
        {/* Filter by Mode of Study */}
        <Radio.Group
          value={studyMode}
          onChange={e => setStudyMode(e.target.value)}
        >
          <Radio.Button value="all">All Modes</Radio.Button>
          <Radio.Button value="online">Online</Radio.Button>
          <Radio.Button value="faceToFace">Face to Face</Radio.Button>
        </Radio.Group>

        {/* Filter by Program of Study */}
        <Select
          value={programType}
          onChange={value => setProgramType(value)}
          style={{ width: 200, marginLeft: '16px' }}
        >
          <Option value="all">All Programs</Option>
          <Option value="day">Day</Option>
          <Option value="evening">Evening</Option>
          <Option value="weekend">Weekend</Option>
        </Select>
      </div>

      {/* Show loading spinner while data is being fetched */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table dataSource={filteredUsers} columns={columns} rowKey="_id" />
      )}
    </div>
  );
};

export default RegisteredUsers;
