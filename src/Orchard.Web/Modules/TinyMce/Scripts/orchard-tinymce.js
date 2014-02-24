var mediaPlugins = ",|";

if (mediaPickerEnabled) {
    mediaPlugins += ",mediapicker";
}

if (mediaLibraryEnabled) {
    mediaPlugins += ",medialibrary";
}

tinyMCE.init({
    theme: "advanced",
    schema: "html5",
    mode: "specific_textareas",
    editor_selector: "tinymce",
    plugins: "autoresize,autolink,lists,spellchecker,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template" + mediaPlugins.substr(2),
    theme_advanced_toolbar_location: "top",
    theme_advanced_toolbar_align: "left",

    // Theme options
    theme_advanced_buttons1: "search,replace,|,cut,copy,paste,|,undo,redo" + mediaPlugins + ",|,link,unlink,charmap,emoticon,codeblock,|,bold,italic,|,numlist,bullist,formatselect,|,code,fullscreen,",
    theme_advanced_buttons2: "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect",
    theme_advanced_buttons3: "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
    theme_advanced_buttons4: "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
    theme_advanced_buttons5: "insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage",
    convert_urls: false,
    valid_elements: "*[*]",
    // shouldn't be needed due to the valid_elements setting, but TinyMCE would strip script.src without it.
    extended_valid_elements: "script[type|defer|src|language]"
});
