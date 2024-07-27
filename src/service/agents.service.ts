import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { femaleImageUrls, maleImageUrls } from '../imageUrl';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  usersUrl: string = 'https://dummyjson.com/users/';
  agents!: User[];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl+'?limit=0');
  }

  getUserById(id: string): Observable<User>{
    return this.http.get<User>(this.usersUrl + id);
  }

  getGenderDistribution(agents: User[]){
    let genders: Record<string, number> = {};
    agents.forEach(agent=>{
      if(genders[agent.gender]) genders[agent.gender]++
        else genders[agent.gender]=1;
    })
    return genders;
  }

  getRoleDistribution(agents: User[]){
    let roles: Record<string, number> = {};
    agents.forEach(agent=>{
      if(roles[agent.role]) roles[agent.role]++
        else roles[agent.role]=1;
    })
    return roles;
  }

  getEyeColorDistribution(agents: User[]){
    let colors: Record<string, number> = {};
    agents.forEach(agent=>{
      if(colors[agent.eyeColor]) colors[agent.eyeColor]++
        else colors[agent.eyeColor]=1;
    })
    return colors;
  }

  getHairColorDistribution(agents: User[]){
    let hairColors: Record<string, number> = {};
    agents.forEach(agent=>{
      if(hairColors[agent.hair.color]) hairColors[agent.hair.color]++
        else hairColors[agent.hair.color]=1;
    })
    return hairColors;
  }

  getHairTypeDistribution(agents: User[]){
    let hairTypes: Record<string, number> = {};
    agents.forEach(agent=>{
      if(hairTypes[agent.hair.type]) hairTypes[agent.hair.type]++
        else hairTypes[agent.hair.type]=1;
    })
    return hairTypes;
  }

  getBloodTypeDistribution(agents: User[]){
    let types: Record<string, number> = {};
    agents.forEach(agent=>{
      if(types[agent.bloodGroup]) types[agent.bloodGroup]++
        else types[agent.bloodGroup]=1;
    })
    return types;
  }

  getEducationDistribution(agents: User[]){
    let colleges: Record<string, number> = {};
    agents.forEach(agent=>{
      if(colleges[agent.university]) colleges[agent.university]++
        else colleges[agent.university]=1;
    })
    return colleges;
  }

  getJobTitleDistribution(agents: User[]){
    let jobs: Record<string, number> = {};
    agents.forEach(agent=>{
      if(jobs[agent.company.title]) jobs[agent.company.title]++
        else jobs[agent.company.title]=1;
    })
    return jobs;
  }

  getCompanyDistribution(agents: User[]){
    let companies: Record<string, number> = {};
    agents.forEach(agent=>{
      if(companies[agent.company.name]) companies[agent.company.name]++
        else companies[agent.company.name]=1;
    })
    return companies;
  }

  updateImageUrls(agents: User[]){
    let femaleImages = [...femaleImageUrls];
    let maleImages = [...maleImageUrls];

    return agents.map((agent: any)=>{
      if (agent.gender==='female')
        agent.image = femaleImages.pop()
      else if (agent.gender=='male')
        agent.image = maleImages.pop();
      return agent;
    })
  }

}
