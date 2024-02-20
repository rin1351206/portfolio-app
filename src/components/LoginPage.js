import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.email = email ? '' : 'メールアドレスを入力してください。';
    tempErrors.password = password.length >= 6 ? '' : 'パスワードは6文字以上である必要があります。';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("フォームが正常に送信されました。", { email, password });
      // 送信処理をここに追加
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`form-control mb-2 ${errors.email ? 'is-invalid' : ''}`}
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        <input
          type="password"
          className={`form-control mb-2 ${errors.password ? 'is-invalid' : ''}`}
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        <button type="submit" className="btn btn-primary mb-2">ログイン</button>
        <button type="button" className="btn btn-link">パスワードを忘れた場合</button>
      </form>
    </div>
  );
}

export default LoginPage;