import { Injectable } from '@angular/core';
import { leetcodeData } from './leetcode_data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeetcodeService {

  constructor(private http: HttpClient) { 
    const API_KEY = "https://leetcode-stats-api.herokuapp.com/nukeRah";
  }
  
  
}
