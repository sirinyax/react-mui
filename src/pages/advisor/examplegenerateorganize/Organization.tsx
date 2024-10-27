// src/components/OrgStructureForm.tsx
import React, { useState } from 'react';
import { Department, Team, Role, Organization } from './types';
import { Button, MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import ButtonTheme from '../../components/theme/ฺButtonTheme';
import SelectTheme from '../../components/theme/SelectThem';
import { ExpandMoreOutlined } from '@mui/icons-material';
import './organize.css';
import InputText from '../../components/inputcomponent/InputText/inputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'; 

const OrgStructureForm: React.FC = () => {
    const company_name = "4.0";
    const [orgName, setOrgName] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [departments, setDepartments] = useState<Department[]>([]);

    // เปลี่ยนค่า Level 1 ตามที่เลือก
    const handleSelectedChangeValue = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value);
    };

    // เพิ่มสาขา
    const handleAddDepartment = () => {
        setDepartments([...departments, { id: Date.now(), name: '', teams: [] }]);
    };

    // ลบสาขา
    const handleDeleteDepartment = (deptId: number) => {
        setDepartments(departments.filter(dept => dept.id !== deptId));
    };

    // เพิ่มแผนก
    const handleAddTeam = (deptId: number) => {
        setDepartments(departments.map(dept =>
            dept.id === deptId
                ? { ...dept, teams: [...dept.teams, { id: Date.now(), name: '', roles: [] }] }
                : dept
        ));
    };
    // ลบแผนก
    const handleDeleteTeam = (deptId: number, teamId: number) => {
        setDepartments(departments.map(dept =>
            dept.id === deptId
                ? { ...dept, teams: dept.teams.filter(team => team.id !== teamId) }
                : dept
        ));
    };

    // เพิ่มตำแหน่งหน้าที่
    const handleAddRole = (deptId: number, teamId: number) => {
        setDepartments(departments.map(dept =>
            dept.id === deptId
                ? {
                    ...dept,
                    teams: dept.teams.map(team =>
                        team.id === teamId
                            ? { ...team, roles: [...team.roles, { id: Date.now(), name: '' }] }
                            : team
                    )
                }
                : dept
        ));
    };
    // ลบตำแหน่งหน้าที่
    const handleDeleteRole = (deptId: number, teamId: number, roleId: number) => {
        setDepartments(departments.map(dept =>
            dept.id === deptId
                ? {
                    ...dept,
                    teams: dept.teams.map(team =>
                        team.id === teamId
                            ? { ...team, roles: team.roles.filter(role => role.id !== roleId) }
                            : team
                    )
                }
                : dept
        ));
    };

    //กดดู preview
    const handlePreviewOrganize = () => {
        console.log("Preview organize");
    }

    //กดบันทึกข้อมูลลง DB
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const organization: Organization = {
            company_name: orgName,
            departments,
        };
        console.log('Generated Organization Structure:', organization);
    };

    //check ข้อมูลที่ input
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        deptId?: number,
        teamId?: number,
        roleId?: number
    ) => {
        const { value } = event.target;

        if (deptId && !teamId) {
            setDepartments(departments.map(dept => dept.id === deptId ? { ...dept, name: value } : dept));
        }
        else if (deptId && teamId && !roleId) {
            setDepartments(departments.map(dept =>
                dept.id === deptId
                    ? {
                        ...dept,
                        teams: dept.teams.map(team => team.id === teamId ? { ...team, name: value } : team)
                    }
                    : dept
            ));
        }
        else if (deptId && teamId && roleId) {
            setDepartments(departments.map(dept =>
                dept.id === deptId
                    ? {
                        ...dept,
                        teams: dept.teams.map(team =>
                            team.id === teamId
                                ? {
                                    ...team,
                                    roles: team.roles.map(role => role.id === roleId ? { ...role, name: value } : role)
                                }
                                : team
                        )
                    }
                    : dept
            ));
        } else {
            setOrgName(value);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className='row m-0 p-1'>
                    <div className="col-12">
                        <span className='header-1'>ชื่อบริษัท: </span>
                        <input type="text" value={orgName} onChange={(e) => handleInputChange(e)} />
                    </div>
                </div>
                <div className="row m-0 p-1">
                    <div className="col-12">
                        <ThemeProvider theme={SelectTheme}>
                            <Select
                                value={selectedValue}
                                onChange={handleSelectedChangeValue}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{
                                    width: '426px',
                                    height: '40px',
                                }}
                                IconComponent={ExpandMoreOutlined}
                            >
                                <MenuItem value="" disabled>กรุณาเลือก Level 1</MenuItem>
                                <MenuItem value={"สาขา"} defaultChecked>สาขา</MenuItem>
                                <MenuItem value={"แผนก"}>แผนก</MenuItem>
                            </Select>
                        </ThemeProvider>
                    </div>
                </div>
                
                {departments.map(dept => (
                    <div key={dept.id} className="row-for-form-input">
                        <div className="card">
                            <div className="card-content-org">
                                <div className="form-input-org">
                                    {/* Level 1 */}
                                    <div className='department-org'>
                                        <div className='department-content d-flex align-items-center' >
                                            <div className='d-block'>
                                                <div className='d-flex justify-content-start m-0 p-0'>
                                                    <p className="header-2">{selectedValue}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className='input-dept-org'>
                                                        <input
                                                            type="text"
                                                            placeholder="Level1"
                                                            value={dept.name}
                                                            onChange={(e) => handleInputChange(e, dept.id)}
                                                        />

                                                    </div>
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                        style={{
                                                            color: "#12CB84",
                                                            cursor: 'pointer',
                                                            fontSize: "20px",
                                                            border: "1px solid #12CB84",
                                                            borderRadius: "4px",
                                                            padding: "8px",
                                                            margin: "0 5px",
                                                        }}
                                                        onClick={() => handleAddTeam(dept.id)}
                                                    />
                                                </div>
                                                
                                            {/* <div>
                                                { selectedValue === 'สาขา' && (
                                                    <button type="button" onClick={() => handleAddTeam(dept.id)}>เพิ่มแผนก</button>
                                                )}
                                                { selectedValue === 'แผนก' && (
                                                    <button type="button" onClick={() => handleAddTeam(dept.id)}>เพิ่มสาขา</button>
                                                )}
                                            </div> */}  
                                            </div>
                                            
                                        </div>

                                        {/* Level 2 */}
                                        <div className="child-dept-content">
                                            {dept.teams.map(team => (
                                                <div key={team.id} className='team-org'>
                                                    {
                                                        selectedValue === 'สาขา' && (
                                                            <span className="header-2">แผนก</span>
                                                        )
                                                    }
                                                    {
                                                        selectedValue === 'แผนก' && (
                                                            <span className="header-2">สาขา</span>
                                                        )
                                                    }
                                                    

                                                    <div className='team-org-content'>
                                                        <div className='input-team-org'>
                                                            <input
                                                                type="text"
                                                                placeholder="Level2"
                                                                value={team.name}
                                                                onChange={(e) => handleInputChange(e, dept.id, team.id)}
                                                            />
                                                            <FontAwesomeIcon 
                                                                icon={faX} 
                                                                style={{
                                                                    color: "red",
                                                                    cursor: 'pointer',
                                                                }} 
                                                                onClick={() => handleDeleteTeam(dept.id, team.id)}
                                                            />
                                                        </div>
                                                        <div>
                                                        <FontAwesomeIcon
                                                            icon={faPlus}
                                                            style={{
                                                                color: "#12CB84",
                                                                cursor: 'pointer',
                                                                fontSize: "20px",
                                                                border: "1px solid #12CB84",
                                                                borderRadius: "4px",
                                                                padding: "8px",
                                                                margin: "0 5px",
                                                            }}
                                                            onClick={() => handleAddRole(dept.id, team.id)}
                                                        />
                                                            {/* <button 
                                                                type="button" 
                                                                onClick={() => handleAddRole(dept.id, team.id)}
                                                            >
                                                                เพิ่มตำแหน่ง
                                                            </button> */}
                                                        </div>
                                                    </div>

                                                    {/* Level 3 */}
                                                    <span className="header-2">ตำแหน่ง</span>

                                                    <div className='role-org'>
                                                        {team.roles.map(role => (
                                                            <div key={role.id} className='role-org-content'>
                                                                <div className='input-role-org'>
                                                                   <input
                                                                        type="text"
                                                                        placeholder="Level3"
                                                                        value={role.name}
                                                                        onChange={(e) => handleInputChange(e, dept.id, team.id, role.id)}
                                                                    /> 
                                                                    <FontAwesomeIcon 
                                                                        icon={faX} 
                                                                        style={{
                                                                            color: "red", 
                                                                            cursor: 'pointer'
                                                                        }} 
                                                                        onClick={() => handleDeleteRole(dept.id, team.id, role.id)}
                                                                    />
                                                                </div>
                                                                    
                                                                    
                                                            </div>
                                                            
                                                        ))}
                                                    </div>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        <div className="button-delete-org">
                                    <div className="row m-0">
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            style={{
                                                color: "red",
                                                cursor: 'pointer',
                                                fontSize: '24px',
                                            }}
                                            onClick={() => handleDeleteDepartment(dept.id)}
                                        />
                                        {/* <ThemeProvider theme={ButtonTheme}>
                                            <Button
                                                variant="outlined"
                                                sx={{ width: 'fit-content', height: 'auto', padding: '5px 10px' }}
                                                onClick={() => handleDeleteDepartment(dept.id)}
                                            >
                                                ลบ{selectedValue}
                                            </Button>
                                        </ThemeProvider> */}
                                    </div>
                                </div>
                    </div>
                    
                ))}
                <div className="row m-0 p-1">
                    <div className="col-12">
                        {
                            selectedValue === "แผนก" && (
                                <div>
                                    <ThemeProvider theme={ButtonTheme}>
                                        <Button
                                            variant="outlined"
                                            sx={{ 
                                                width: '426px', 
                                                height: '40px' 
                                            }}
                                            onClick={handleAddDepartment}
                                        >
                                            เพิ่มแผนก
                                        </Button>
                                    </ThemeProvider>
                                </div>
                            )
                        }
                        {
                            selectedValue === "สาขา" && (
                                <div>
                                    <ThemeProvider theme={ButtonTheme}>
                                        <Button
                                            variant="outlined"
                                            sx={{ 
                                                width: '426px', 
                                                height: '40px' 
                                            }}
                                            onClick={handleAddDepartment}
                                        >
                                            เพิ่มสาขา
                                        </Button>
                                    </ThemeProvider>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-12 mt-3 mb-3">
                        <ThemeProvider theme={ButtonTheme}>
                            <Button
                                variant="outlined"
                                sx={{
                                    padding: '5px 10px',
                                    width: '426px',
                                    height: '40px'
                                }}
                                onClick={handlePreviewOrganize}
                            >
                                ดูตัวอย่าง
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
                <div className="row m-0 p-0">
                    <div className="col-12 mt-3 mb-3">
                        <ThemeProvider theme={ButtonTheme}>
                            <Button
                                variant="contained"
                                sx={{
                                    padding: '5px 10px',
                                    width: '426px', 
                                    height: '40px'
                                }}
                                type='submit'
                            >
                                บันทึก
                            </Button>
                        </ThemeProvider>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default OrgStructureForm;
