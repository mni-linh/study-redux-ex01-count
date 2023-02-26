# Report Study Redux

## Set up project

```
   $ npm i
```

## Start project

```
   $ npm run start
```

## Build project

```
   $ npm run build
```

## Luồng chạy của redux

1. Các hành động được kích hoạt bởi người dùng hoặc các sự kiện trong ứng dụng.

2. Các hành động được gửi đến một hoặc nhiều reducers mà Reducer là một hàm xử lý, nhận các hành động và trả về một trạng thái mới.

3. Reducer xử lý các hành động và trả về trạng thái mới. Reducer không thay đổi trực tiếp trạng thái hiện tại mà tạo ra một trạng thái mới.

4. Các trạng thái mới được lưu trữ trong store của Redux còn Store là nơi lưu trữ tất cả các trạng thái của ứng dụng.

5. Các thành phần trong ứng dụng sử dụng các selector để truy cập trạng thái trong store.

6. Các thành phần sẽ được render lại khi trạng thái thay đổi, sử dụng các giá trị được truyền vào từ các selector.

7. Khi một hành động mới được kích hoạt, quá trình này sẽ được lặp lại.
