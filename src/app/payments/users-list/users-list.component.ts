import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material'
import { Observable } from 'rxjs'
import { PaymentModalComponent } from 'src/app/shared/payment-modal/payment-modal.component'
import { PaymentService } from '../services/payment.service'
import { Users } from './users'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: Users[] = []
  usersList$: Observable<Users[]>

  constructor(
    private PaymentService: PaymentService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit() {
    this.usersList$ = this.PaymentService.listUser()
  }
  openModal(name: string, id: number, img: string) {
    const dialogConfig = new MatDialogConfig()
    dialogConfig.id = 'payment-modal.component'
    dialogConfig.data = {
      title: 'Pagamento para ' + name,
      id: id,
      img: img,
    }
    const modalDialog = this.matDialog.open(PaymentModalComponent, dialogConfig)
  }
}
