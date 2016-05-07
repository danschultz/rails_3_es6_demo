class SystemES6Processor < Sprockets2::ES6Processor
  def configuration
    {
      'modules' => "system",
      'moduleIds' => true
    }
  end
end

Rails.application.assets.register_engine('.es6', SystemES6Processor)
