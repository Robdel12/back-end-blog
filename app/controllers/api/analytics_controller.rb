class Api::AnalyticsController < ApplicationController
  # before_filter :authorize_user

  def index
    params[:startDate] ||= "2015-01-01"
    params[:endDate] ||= "2015-01-16"

    startDate = Date.parse(params[:startDate]).strftime("%Y-%m-%d")
    endDate = Date.parse(params[:endDate]).strftime("%Y-%m-%d")

    analytic = {
      analytic: [
        id: "current",
        date: ["date"],
        pageview: ["Pageview"]
      ]
    }

    google_analytics = GoogleAnalytics.new
    data = google_analytics.visitors(startDate, endDate)

    data.each do |key, value|
      analytic[:analytic][0][:date] << key
      analytic[:analytic][0][:pageview] << value
    end

    render json: analytic
  end

end
