// src/types.ts
export interface Role {
    id: number;
    name: string;
  }
  
  export interface Team {
    id: number;
    name: string;
    roles: Role[];
  }
  
  export interface Department {
    id: number;
    name: string;
    teams: Team[];
  }
  
  export interface Organization {
    company_name: string;
    departments: Department[];
  }
  
