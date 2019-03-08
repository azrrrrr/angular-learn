import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service'
import { Employee } from '../employee.type'
import { HttpResponse } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
    private nzMessageService: NzMessageService) { }

  // 数据
  employeesList: Employee[] = []

  // 分页的数据
  curPage = 1
  pageSize = 10
  total: number

  // 是否加载中
  isLoading: boolean

  // 列表追踪
  trackByEmpId(index: number, employee: Employee) {
    return employee.id
  }

  // 封装获取数据的方法
  fetchData() {
    this.employeesService.fetchData(this.curPage, this.pageSize)
    .subscribe((res: HttpResponse<Employee[]>) => { 
      console.log(this.curPage)

      console.log(res)
      // console.log(res.headers.get('X-Total-Count'))
      this.total = +res.headers.get('X-Total-Count')
      this.employeesList = res.body
    })
  }
  // 删除
  handleDelete(id: number): void {
    this.nzMessageService.info('已删除');

    this.employeesService.delEmployee(id)
        .subscribe(res =>{
          // this.employeesList = this.employeesList.filter(
          //   employee => employee.id !== id
          // )
          this.fetchData()
        })
  }

  handleDelcancel(): void {
    this.nzMessageService.info('取消删除');
  }


  ngOnInit() {
    this.fetchData()
  }

}
