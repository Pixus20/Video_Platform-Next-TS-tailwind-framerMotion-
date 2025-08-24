const SettingsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Налаштування</h1>

      {/* Профіль */}
      <section className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Профіль</h2>
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Ім’я користувача" className="p-2 rounded bg-gray-800" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-800" />
          <input type="password" placeholder="Новий пароль" className="p-2 rounded bg-gray-800" />
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">
            Зберегти
          </button>
        </div>
      </section>

      {/* Відео */}
      <section className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Налаштування відео</h2>
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="Назва каналу" className="p-2 rounded bg-gray-800" />
          <textarea placeholder="Опис каналу" className="p-2 rounded bg-gray-800" />
          <select className="p-2 rounded bg-gray-800">
            <option>Публічні</option>
            <option>Приватні</option>
            <option>Для друзів</option>
          </select>
        </div>
      </section>

      <section className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Зовнішній вигляд</h2>
        <div className="flex items-center gap-2">
          <label>Темна тема</label>
          <input type="checkbox" />
        </div>
        <div className="flex items-center gap-2">
          <label>Автовідтворення</label>
          <input type="checkbox" />
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
