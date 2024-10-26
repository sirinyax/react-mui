// src/components/OrgStructureForm.tsx
import React, { useState } from 'react';
import { Department, Team, Role, Organization } from './types';

const OrgStructureForm: React.FC = () => {
    const [orgName, setOrgName] = useState('4.0');
    const [titleLevel1, setTiltleLevel1] = useState<string>('');
    const [labelButtonLevel2, setLabelButtonLevel2] = useState<string>('');
    const [departments, setDepartments] = useState<Department[]>([]);

    const handleAddDepartment = () => {
        setDepartments([...departments, { id: Date.now(), name: '', teams: [] }]);
    };

    const handleAddTeam = (deptId: number) => {
        setDepartments(departments.map(dept =>
            dept.id === deptId
                ? { ...dept, teams: [...dept.teams, { id: Date.now(), name: '', roles: [] }] }
                : dept
        ));
    };

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

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const organization: Organization = {
            name: orgName,
            departments,
        };
        console.log('Generated Organization Structure:', organization);
    };

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
                <div>
                    <label>ชื่อบริษัท: </label>
                    <input type="text" value={orgName} onChange={(e) => handleInputChange(e)} />
                </div>
                <button type="button" onClick={handleAddDepartment}>เพิ่มสาขา</button>

                {departments.map(dept => (
                    <div key={dept.id} style={{ marginLeft: '20px' }}>
                        <input
                            type="text"
                            placeholder="Level1"
                            value={dept.name}
                            onChange={(e) => handleInputChange(e, dept.id)}
                        />
                        <button type="button" onClick={() => handleAddTeam(dept.id)}>เพิ่มแผนก</button>

                        {dept.teams.map(team => (
                            <div key={team.id} style={{ marginLeft: '20px' }}>
                                <input
                                    type="text"
                                    placeholder="Level2"
                                    value={team.name}
                                    onChange={(e) => handleInputChange(e, dept.id, team.id)}
                                />
                                <button type="button" onClick={() => handleAddRole(dept.id, team.id)}>เพิ่มตำแหน่ง</button>

                                {team.roles.map(role => (
                                    <div key={role.id} style={{ marginLeft: '20px' }}>
                                        <input
                                            type="text"
                                            placeholder="Level3"
                                            value={role.name}
                                            onChange={(e) => handleInputChange(e, dept.id, team.id, role.id)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}

                <button type="submit">Generate</button>
            </form>
        </div>

    );
};

export default OrgStructureForm;
