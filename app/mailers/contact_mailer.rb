class ContactMailer < ActionMailer::Base
  default from: "robertdeluca19@gmail.com"

  def contact_email(contact)
    @contact = contact
    mail(to: "robertdeluca19@gmail.com", subject: "New contact from #{@contact.email}", from: @contact.email)
  end

end
