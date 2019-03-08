import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from './employee.type'
import { URL } from '../config'

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  // 获取数据
  fetchData(curPage :number, pageSize) {
    // const token = localStorage.getItem('login-token')
    const employeeUrl = `${URL}/employees?_page=${curPage}&_limit=${pageSize}`
    return this.http.get<Employee[]>(employeeUrl,{
      // 获取完整的响应体
      observe: 'response',
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    })
  }

  // 删除数据
  delEmployee(id: number) {
    const token = localStorage.getItem('login-token')
    return this.http.delete(`${URL}/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
