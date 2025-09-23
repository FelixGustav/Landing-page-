export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Envie sua mensagem e retornaremos o mais rápido possível.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nome */}
              <div className="form-group">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Seu nome" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* E-mail */}
              <div className="form-group">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div className="form-group">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensagem
              </label>
              <textarea 
                id="message" 
                rows={5} 
                placeholder="Sua mensagem"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 resize-vertical"
              ></textarea>
            </div>

            {/* Botão */}
            <div className="form-group">
              <button 
                type="submit"
                className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-200 focus:ring-4 focus:ring-purple-600 focus:ring-opacity-50"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}