import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private tokenKey = 'authToken'; // Key for storing token in localStorage
  productsSource = new BehaviorSubject([]);
  currentProducts = this.productsSource.asObservable();
  productsTmp = [];

  constructor(private http: HttpClient) {}

  // Product-related methods
  getProducts() {
    this.http.get(environment.apiUrl + '/api/v1/products').subscribe((data: any) => {
      this.productsSource.next(data);
      this.productsTmp = data;
    });
  }

  searchProducts(searchText: string) {
    this.http
      .get(environment.apiUrl + '/api/v1/products', {
        params: { keyword: searchText },
      })
      .subscribe((data: any) => {
        this.productsSource.next(data);
      });
  }

  clearSearch(searchText: string) {
    if (searchText === '') {
      this.productsSource.next(this.productsTmp);
    }
  }

  getSingleProduct(id: string) {
    return this.http.get(environment.apiUrl + '/api/v1/product/' + id);
  }

  orderCreate(order: any) {
    return this.http.post(environment.apiUrl + '/api/v1/order', order);
  }

  // Authentication methods
  signup(data: { username: string; email: string; phone: string; password: string }): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/v1/users/signup', data);
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/v1/users/login', data);
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
