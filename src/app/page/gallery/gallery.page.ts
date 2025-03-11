import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: false
})
export class GalleryPage implements OnInit {

  isLoading = false;

  constructor(private actionSheetController: ActionSheetController, private toastController: ToastController) { }

  ngOnInit() {
  }

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Bluetooth',
      role: 'share',
      data: {
        action: 'share',
      },
      handler: () => {
        this.presentDeviceList();
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  async presentDeviceList() {
    this.isLoading = true;
    setTimeout(async () => {
      this.isLoading = false;
      const actionSheet = await this.actionSheetController.create({
        header: 'Dispositivos Cercanos',
        buttons: [
          {
            text: 'Retro Iphone',
            handler: () => {
              this.showToast('Enviado correctamente');
            }
          },
          {
            text: 'Yusmendy Android',
            handler: () => {
              this.showToast('Enviado correctamente');
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel'
          }
        ]
      });
      await actionSheet.present();
    }, 3000);
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  shareImage(imageName: string) {
    this.presentDeviceList();
    this.showToast(`${imageName} Cargando para enviar`);
  }
}
