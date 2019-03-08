import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service'
import { Employee } from '../employee.type'
import { HttpResponse } from '@angular/common/http'
import { NzMessageService } from 'ng-zorro-antd'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms'

// 手机号码的正则
const PHONE_NUMBER_REGEXP = /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\d{8}$/

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeesService: EmployeesService,
    private nzMessageService: NzMessageService,
    private fb: FormBuilder) { }

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
      // console.log(this.curPage)

      // console.log(res)
      
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

  // 修改
  isShowEmployeeModal = false
  employeeEditForm: FormGroup
  editEmployeeId: number

  showEditEmployeeModal(id: number): void {
    this.isShowEmployeeModal = true;
    this.editEmployeeId = id
    // 根据id获取员工的数据
    this.employeesService.getEmployeeById(id)
        .subscribe((employee: Employee) => {
          // console.log(employee)
          // 将获取到的数据展示于表单中
          const { joinDate } = employee
          this.employeeEditForm.patchValue({ ...employee, joinDate: new Date(joinDate)})
          // this.employeeEditForm.patchValue(employee)
        })
  }

  // 确定修改
  editEmployee(): void {
    // console.log('确定修改');
    
    const employeeEditForm =  this.employeeEditForm
    const { controls } = employeeEditForm

    for (const key in controls) {
      controls[ key ].markAsDirty();
      controls[ key ].updateValueAndValidity();
    }

    console.log(employeeEditForm.valid)

    if(!employeeEditForm.valid) { return }

    let { joinDate } = employeeEditForm.value
    if(!joinDate) { joinDate = +new Date() }
    const params = { ...employeeEditForm.value, joinDate: +joinDate}

    this.employeesService.updateEmployeeById(this.editEmployeeId, params)
        .subscribe((res: Employee) => {
          console.log('编辑成功', res)
          this.isShowEmployeeModal = false
          const index = this.employeesList.findIndex(employee => employee.id === res.id)
          this.employeesList[index] = res 
          this.resetEmployeeForm()
        })
  }

  resetEmployeeForm(): void {

    const employeeEditForm = this.employeeEditForm
    const { controls } = employeeEditForm

    this.employeeEditForm.reset()
    for (const key in controls) {
      controls[ key ].markAsPristine();
      controls[ key ].updateValueAndValidity();
    }
  }

  // 取消修改
  handleEditEmployeeCancel(): void {
    console.log('取消修改');
    this.isShowEmployeeModal = false;
    this.resetEmployeeForm()
  }


  ngOnInit() {
    this.fetchData()
    this.employeeEditForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['0'],
      email: ['',[Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern(PHONE_NUMBER_REGEXP)]],
      joinDate: ['', [this.joinDateValidate]]
    });
  }


  // 日期的自定义校验规则
  joinDateValidate(control: FormControl) {
    const selectDate = +control.value
    // const selectDate = control.value
    // console.log(selectDate)
    const curDate = +new Date()
    if (selectDate > curDate) { return { date: true } }
    return null
  }

}
