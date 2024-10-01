import React, { useEffect, useState } from 'react';
import { Table, Select, Radio, Spin, Input, Button } from 'antd';
import axios from 'axios';

const { Option } = Select;

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [studyMode, setStudyMode] = useState('all'); 
  const [programType, setProgramType] = useState('all'); 
  const [loading, setLoading] = useState(true); 
  const [accessGranted, setAccessGranted] = useState(false); 
  const [password, setPassword] = useState(''); 
  const correctPassword = 'Learn@123'; 

  useEffect(() => {
    if (accessGranted) {
      const fetchData = async () => {
        setLoading(true); // Start loading
        try {
          const response = await axios.get('https://sober-backend-dushimiman.onrender.com/api/registrations');
          setUsers(response.data);
          setFilteredUsers(response.data); 
          setLoading(false);
        } catch (error) {
          console.error('Failed to fetch registrations:', error);
          setLoading(false); // Stop loading on error
        }
      };

      fetchData();
    }
  }, [accessGranted]);

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

  // Handle password check
  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setAccessGranted(true);
    } else {
      alert('Incorrect password, please try again.');
    }
  };

  return (
    <div>
      {!accessGranted ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h3>Enter Password</h3>
          <Input.Password
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: 300, marginBottom: '20px' }}
          />
          <Button type="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </div>
      ) : (
        <div>
          <h3>Registered</h3>

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
      )}
    </div>
  );
};

export default RegisteredUsers;
