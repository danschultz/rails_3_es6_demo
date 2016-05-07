require 'babel/transpiler'

class SystemES6Processor < Sprockets2::ES6Processor
  def configuration
    {
      'modules' => "system",
      'moduleIds' => true,
      'externalHelpers' => true
    }
  end
end

Rails.application.assets.append_path Babel::Transpiler.source_path
Rails.application.assets.register_engine('.es6', SystemES6Processor)
