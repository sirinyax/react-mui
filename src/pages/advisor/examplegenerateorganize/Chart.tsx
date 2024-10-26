import React from 'react'
import styled from "@emotion/styled";
import { Tree, TreeNode } from "react-organizational-chart";
import { Organization, Department, Team, Role } from './types';
import data from './exampledata';
import './chart.css';

const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--supporting-color-2').trim();

const Chart = () => {
  return (
    <div>
      <div className="container p-3">
        <h1>Example organizational.</h1>
        <div className="m-2">
          <Tree
            lineWidth={"2px"}
            lineColor={lineColor}
            label={<div className='title-node'>
              <span className="header-1">
                บริษัท {data.company_name}
              </span>
            </div>}
          >
            {data.departments.map((departments, index) => (
              <TreeNode key={index} label={<div className='title-node'>{departments.name}</div>}>
                { departments.teams.map((team, index) => (
                  <TreeNode key={index} label={<div className='title-node'>{team.name}</div>}>
                    {team.roles.map((role, index) => (
                      <TreeNode key={index} label={<div className='title-node'>{role.name}</div>}></TreeNode>
                  ))}
                  </TreeNode>
                ))}
              </TreeNode>
            ))}
          </Tree>
        </div>
      </div>

    </div>
  )
}

export default Chart;