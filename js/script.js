var array_data;var array_modal_form;var arparams;var time_init_click=((new Date).getTime())/1000;var array_order_user;document.addEventListener("DOMContentLoaded",function(){jQuery("body").append('<div class="o-w-modal-overlay"></div><div class="o-w-modal-base"><div class="o-w-modal-body"><div class="o-w-modal-close o-w-close">X</div><div class="o-w-modal-title"></div><div class="o-w-modal-inner"></div></div></div>');o_w_init();},false);if(typeof(BX)=="function"&&typeof(BX.addCustomEvent)=="function"){BX.addCustomEvent("onAjaxSuccess",function(){o_w_init();});}function o_w_init(){jQuery(".o-w-click-button").click(function(){if(time_init_click>0&&time_init_click>(((new Date).getTime())/1000-0.01)){return;}time_init_click=((new Date).getTime())/1000;var th=jQuery(this);var m_s_target=th.data("metrika_send");var element_id=th.data("element_id");var props=th.data("props");var prs=th.data("prs");array_modal_form=th.data("array_modal_form");arparams=th.data("arparams");var css_theme_file=array_modal_form.css_theme_file;var mps=arparams.MODAL_PAY_SYSTEMS;var mds=arparams.MODAL_DELIVERY_SYSTEMS;o_w_modal_show();o_w_loading();var m_o_target=th.data("metrika_open");if(m_o_target!=null&&typeof(m_o_target)=="string"&&m_o_target.length>0){reachgoal_send(m_o_target);}jQuery.get("/bitrix/components/webes/oneclick/ajax.php?act=get_offers_array&element_id="+element_id+"&css_theme_file="+encodeURIComponent(css_theme_file)+"&props="+props+"&prs="+prs+"&mps="+mps+"&mds="+mds,function(array_data_l){if(typeof(array_data_l)=="string"){try{array_data=JSON.parse(array_data_l);}catch(e){alert(arparams.MODAL_ERROR_DATA);console.log(e);return false;}}else{array_data=array_data_l;}if(typeof(arparams)=="string"){try{arparams=JSON.parse(arparams);}catch(e){alert(arparams.MODAL_ERROR_DATA);console.log(e);return false;}}array_order_user=th.data("array_order_user");if(typeof(array_order_user)=="string"){try{array_order_user=JSON.parse(array_order_user);}catch(e){alert(arparams.MODAL_ERROR_DATA);console.log(e);return false;}}jQuery(".o-w-modal-title").html(arparams.MODAL_HEADER+"<style>"+array_data.css_theme+"</style>");var html=o_w_get_main_view(array_data);jQuery(".o-w-modal-inner").html(html);o_w_calc_current_basket_price();jQuery(".o-w-be-del").click(function(){var th=jQuery(this);var id_cart=th.data("id_cart");jQuery.get("/bitrix/components/webes/oneclick/ajax.php?act=del_from_current_cart&id_cart="+id_cart,function(){th.closest(".o-w-current-cart").find(".o-w-be-item[data-id_cart='"+id_cart+"']").remove();o_w_calc_current_basket_price();});});if(Number(array_data.price)>0){o_w_view_price(array_data.price);}jQuery(".o-w-quantity-minus").click(function(){var th=jQuery(this);var inputcnt=th.parent().find("input[type=text]");if(inputcnt.val()<=1){inputcnt.val("1");}else{inputcnt.val(inputcnt.val()-1);}o_w_recalc_price();});jQuery(".o-w-quantity-plus").click(function(){var th=jQuery(this);var inputcnt=th.parent().find("input[type=text]");inputcnt.val(Number(inputcnt.val())+1);o_w_recalc_price();});o_w_view_disabled_button();if(array_data.ELEMENT_ID=="0"){if(typeof(array_data.current_basket)!="undefined"&&array_data.current_basket.length==0){jQuery(".o-w-modal-inner").html('<br><br><p class="o-w-empty-cart">'+arparams.CURRENT_CART_EMPTY+"</p><br><br>");}var btn_disabled=jQuery(".o-w-show-order-block-button-disabled");if(btn_disabled.is("*")){btn_disabled.removeClass("o-w-show-order-block-button-disabled").addClass("o-w-show-order-block-button");}o_w_enable_active_button(0,arparams,array_order_user);jQuery(".o-w-show-order-block-button").trigger("click");jQuery(".o-w-be-item").each(function(){var th=jQuery(this);if(th.data("id_cart")==undefined){th.remove();}});if(jQuery(".o-w-quantity-block").is("*")){jQuery(".o-w-quantity-block").remove();}return false;}if(o_w_arascount(array_data.offers.offers)==1||!jQuery(".o-w-block-group").is(":visible")){for(var ofid in array_data.offers.offers){o_w_view_order_form(ofid,array_data.offers.offers[ofid].price,m_s_target,arparams,array_order_user);jQuery(".o-w-show-order-block-button").trigger("click");break;}return false;}var i=0;var offers_button_array=[];for(var offer_id in array_data.offers.offers){for(var code in array_data.offers.offers[offer_id]){var val=array_data.offers.offers[offer_id][code].value;if(typeof(offers_button_array[code])!="object"){offers_button_array[code]=[];}if(typeof(offers_button_array[code][val])!="object"){offers_button_array[code][val]=[];}offers_button_array[code][val][i++]=offer_id;}}for(code in offers_button_array){for(val in offers_button_array[code]){jQuery(".o-w-item-param[data-code='"+code+"'][data-val='"+val+"']").data("offers",offers_button_array[code][val].filter(Number).join());}}jQuery(".o-w-item-param").click(function(){if(jQuery(this).is(".o-w-disabled")){o_w_reset_all();return false;}if(jQuery(this).is(".o-w-active")){o_w_reset_group(jQuery(this).closest(".o-w-block-group"),jQuery(this).data("offers"),1);return false;}jQuery(this).closest(".o-w-block-group").find(".o-w-item-param").removeClass("o-w-active");jQuery(this).addClass("o-w-active");var arResult=o_w_vi_variants();if(arResult.length>0){o_w_view_order_form(arResult[0],array_data.offers.offers[arResult[0]].price,m_s_target,arparams,array_order_user);}else{o_w_disable_active_button();}});return false;});return false;});jQuery("html").on("keyup keydown",function(e){if(jQuery(".o-w-modal-overlay").is(":visible")&&e.which==27){o_w_modal_hide();}});jQuery(".o-w-modal").click(function(){o_w_modal_show();var title=jQuery(this).data("title");var text=jQuery(this).data("text");var width=jQuery(this).data("width");var url=jQuery(this).data("url");if(typeof(title)!="undefined"&&title.length>0){jQuery(".o-w-modal-base").find(".o-w-modal-title").html(title);}if(typeof(text)!="undefined"&&text.length>0){jQuery(".o-w-modal-base").find(".o-w-modal-inner").html(text);}if(typeof(width)!="undefined"&&width>0){jQuery(".o-w-modal-base").find(".o-w-modal-body").css({maxWidth:width+"px"});}if(typeof(url)!="undefined"&&url.length>0){jQuery.get(url,function(html){jQuery(".o-w-modal-base").find(".o-w-modal-inner").html(html);o_w_close_init();});}o_w_close_init();return false;});jQuery(".o-w-modal-overlay").click(function(){o_w_modal_hide();return false;});if(document.location.hash.indexOf("o-w-first-oneclick")!=-1){jQuery(".o-w-click-button").each(function(){if(jQuery(this).data("element_id")>0){jQuery(this).trigger("click");return false;}});}if(jQuery(".o-w-wa-button").is(":visible")){jQuery(".o-w-wa-button").click(function(){var th=jQuery(this);var m_s_target=th.data("metrika_send");var element_id=th.data("element_id");var phone=th.data("wa_phone");var fraze=th.data("wa_fraze");if(m_s_target!=null&&typeof(m_s_target)=="string"&&m_s_target.length>0){reachgoal_send(m_s_target);}jQuery.get("/bitrix/components/webes/oneclick/ajax.php?act=get_offers_array&element_id="+element_id,function(res){if(typeof(res)!="object"){res=JSON.parse(res);}if(res.result=="error"){alert(res.description);return false;}var str=fraze+" "+res.name+", "+document.location.protocol+"//"+document.location.hostname+res.detail_page_url;window.open("https://wa.me/"+phone+"?text="+str);});});}}function o_w_arascount(ar){var cnt=0;for(var i in ar){cnt++;}return cnt;}function o_w_view_order_form(ofid,price,m_s_target,arparams,array_order_user){o_w_view_price(price);jQuery(".o-w-main-button-first-block").html('<div class="o-w-show-order-block-button" data-metrika_send="'+m_s_target+'">'+arparams.MODAL_CONTINUE+"</div>");o_w_enable_active_button(ofid,arparams,array_order_user);if(jQuery(".o-w-main-button-first-block").offset().top>0&&0){jQuery(".o-w-modal-base").animate({scrollTop:(jQuery(".o-w-modal-base").scrollTop()+jQuery(".o-w-main-button-first-block").offset().top-jQuery("html").scrollTop())-40},{duration:500});}}function o_w_view_price(price){jQuery(".o-w-price").html('<div class="o-w-fx-mobile"><div>'+arparams.MODAL_COST+':</div><span><span id="o-w-price-item-span" data-price_item="'+Number(price)+'">'+Number(price)+"</span> "+arparams.MODAL_CURRENCY+"</span></div>");o_w_recalc_price();}function o_w_recalc_price(){var price=parseFloat(jQuery("#o-w-price-item-span").data("price_item"));var qw=jQuery("[name='q_w_quantity']");if(qw.is(":visible")){jQuery("#o-w-price-item-span").html(parseInt(qw.val())*price);}o_w_calc_current_basket_price();}function o_w_calc_current_basket_price(){if(!jQuery(".o-w-all-cnt").is(":visible")){return false;}setTimeout(function(){var cnt=0,sum=0;jQuery(".o-w-item-quantity:visible").each(function(){cnt+=parseInt(jQuery(this).html());});jQuery(".o-w-item-cost:visible").each(function(){var cnt_local=parseInt(jQuery(this).closest(".cnt-sum-item").find(".o-w-item-quantity").html());sum+=parseInt(jQuery(this).html())*cnt_local;});jQuery(".o-w-all-cnt").html(cnt);jQuery(".o-w-all-sum").html(sum);},10);}function o_w_reset_all(){jQuery(".o-w-item-param").each(function(){jQuery(this).removeClass("o-w-active");jQuery(this).removeClass("o-w-disabled");});o_w_disable_active_button();}function o_w_reset_group(group,offers_string,first){group.find(".o-w-item-param").each(function(){jQuery(this).removeClass("o-w-active");jQuery(this).removeClass("o-w-disabled");});if(first==1){setTimeout(function(){var a=offers_string.split(",");for(var i in a){var s=".o-w-item-param.o-w-active";jQuery(s).each(function(){if(jQuery(this).data("offers")==a[i]){o_w_reset_group(jQuery(this).closest(".o-w-block-group"),0);}});}},50);}o_w_disable_active_button();}function o_w_vi_variants(){var offers_id_actives=[];jQuery(".o-w-item-param.o-w-active").each(function(){var arCurrentElement=jQuery(this).data("offers").split(",");if(offers_id_actives.length==0){offers_id_actives=arCurrentElement;}else{var arTemp=[];var j=0;for(var i in arCurrentElement){if(o_w_in_array(arCurrentElement[i],offers_id_actives)){arTemp[j++]=arCurrentElement[i];}}offers_id_actives=arTemp;}});jQuery(".o-w-item-param").each(function(){var th=jQuery(this);var arCurrentElement=th.data("offers").split(",");var in_array=false;for(i in arCurrentElement){if(o_w_in_array(arCurrentElement[i],offers_id_actives)){in_array=true;}}if(!in_array){th.addClass("o-w-disabled");th.removeClass("o-w-active");}else{th.removeClass("o-w-disabled");}});var need_recurrent_play=false;jQuery(".o-w-block-group").each(function(){var g=jQuery(this);var cnt={active:0,disabled:0,all:0,oth:0};var oth_element=null;g.find(".o-w-item-param").each(function(){var item=jQuery(this);if(item.is(".o-w-active")){cnt.active++;}else{if(item.is(".o-w-disabled")){cnt.disabled++;}else{cnt.oth++;oth_element=item;}}cnt.all++;});if(cnt.active==0&&cnt.oth==1){oth_element.addClass("o-w-active");need_recurrent_play=true;}if(cnt.disabled==cnt.all){g.find(".o-w-item-param").each(function(){jQuery(this).removeClass("o-w-active");jQuery(this).removeClass("o-w-disabled");});o_w_disable_active_button();}});if(need_recurrent_play){return o_w_vi_variants();}jQuery(".o-w-block-group").each(function(){var ex=false;jQuery(this).find(".o-w-item-param.o-w-active").each(function(){ex=true;});if(!ex){offers_id_actives=[];}});return offers_id_actives;}function o_w_disable_active_button(){o_w_view_disabled_button();}function o_w_view_disabled_button(){jQuery(".o-w-main-button-first-block").html('<div class="o-w-show-order-block-button-disabled">'+arparams.MODAL_CONTINUE+"</div>");}function o_w_enable_active_button(offer_id,arparams,array_order_user){jQuery(".o-w-show-order-block-button").click(function(){var params_txt=o_w_get_text_params();var m_s_target=jQuery(this).data("metrika_send");jQuery(this).remove();var cart_block=jQuery(".o-w-current-cart");if(cart_block.is(":visible")){var img_src=jQuery(".o-w-item-image img").prop("src");var cnt=1;if(jQuery("[name='q_w_quantity']").is(":visible")){cnt=jQuery("[name='q_w_quantity']").val();}var cost=jQuery("#o-w-price-item-span").data("price_item");cart_block.append('<div class="o-w-be-item"><div class="o-w-img"><img src="'+img_src+'"></div><div class="o-w-be-title"><b>'+jQuery("h2.o-w-title").html()+"</b><br>"+params_txt+'<br><b class="cnt-sum-item"><span class="o-w-item-quantity">'+cnt+'</span> x <span class="o-w-item-cost">'+cost+"</span> "+arparams.MODAL_CURRENCY+"</b></div><div></div></div>");jQuery(".o-w-item-image").hide();jQuery(".o-w-title").html(arparams.CURRENT_CART_ORDER);setTimeout(function(){jQuery(".o-w-action-block").append('<input type="hidden" name="o_w_current_cart" value="1">');},100);}var payment_block="<br>";if(arparams.REQUEST_PAYMENT=="Y"&&typeof(array_data.paysystems)=="object"&&array_data.paysystems.length>0){payment_block=payment_block+'<div><div class="o-w-label">'+arparams.MODAL_PAY+'</div><div class="o-w-payment_flex_block">';for(var i in array_data.paysystems){payment_block+='<input type="radio" name="pay_system" class="o-w-pay_system" id="o-w-label-'+i+'" value="'+array_data.paysystems[i].id+'"'+(i==0?" checked ":"")+'><label for="o-w-label-'+i+'" class="o-w-p-item">'+(array_data.paysystems[i].logo!=""?'<img src="'+array_data.paysystems[i].logo+'"><br>':"")+array_data.paysystems[i].name+"</label>";}payment_block+="</div></div>";}var delivery_block='<br><input type="hidden" name="MODAL_PAY_DEFAULT" value="'+arparams.MODAL_PAY_DEFAULT+'">';if(arparams.REQUEST_DELIVERY=="Y"&&typeof(array_data.deliverysystems)=="object"&&array_data.deliverysystems.length>0){delivery_block=delivery_block+'<div><div class="o-w-label">'+arparams.MODAL_DELIVERY+'</div><div class="o-w-delivery_flex_block">';for(var i in array_data.deliverysystems){delivery_block+='<input type="radio" name="delivery_system" class="o-w-delivery_system" id="o-w-d-label-'+i+'" value="'+array_data.deliverysystems[i].id+'"'+(i==0?" checked ":"")+'><label for="o-w-d-label-'+i+'" class="o-w-d-item">'+(array_data.deliverysystems[i].logo!=""?'<img src="'+array_data.deliverysystems[i].logo+'"><br>':"")+array_data.deliverysystems[i].name+"</label>";}delivery_block+="</div></div>";}if(typeof(arparams.REQUEST_FIO_REQ)=="undefined"){arparams.REQUEST_FIO_REQ="Y";}if(typeof(arparams.REQUEST_EMAIL_REQ)=="undefined"){arparams.REQUEST_EMAIL_REQ="Y";}if(typeof(arparams.REQUEST_PHONE_REQ)=="undefined"){arparams.REQUEST_PHONE_REQ="Y";}var html='<div class="o-w-form"><input type="hidden" name="params_txt" value="'+params_txt+'" /><input type="hidden" name="product_name" value="'+array_data.name+'" /><input type="hidden" name="product_img" value="'+array_data.img+'" /><input type="hidden" name="product_detail_page_url" value="'+array_data.detail_page_url+'" /><input type="hidden" name="PRODUCT_ID" value="'+offer_id+'"><input type="hidden" name="USER_FIO" value="'+array_order_user.fio+'"><input type="hidden" name="USER_EMAIL" value="'+array_order_user.email+'"><input type="hidden" name="USER_PHONE" value="'+array_order_user.phone+'"><div class="o-w-info">'+arparams.MODAL_TEXT_BEFORE+"</div>"+(arparams.REQUEST_FIO=="Y"?'<div class="o-w-label">'+arparams.MODAL_YOUR_NAME+":"+(arparams.REQUEST_FIO_REQ=="Y"?'<sup class="o-w-sup-required">*</sup>':"")+'</div><input type="text" name="NAME" placeholder="'+arparams.MODAL_YOUR_NAME_EX+'" class="o-w-fio" '+(arparams.REQUEST_FIO_REQ=="Y"?"required":"")+' autocomplete="off" value="'+(array_data.user.user_fio!=null?array_data.user.user_fio:"")+'"><br>':"")+(arparams.REQUEST_EMAIL=="Y"?'<div class="o-w-label">'+arparams.MODAL_EMAIL+":"+(arparams.REQUEST_EMAIL_REQ=="Y"?'<sup class="o-w-sup-required">*</sup>':"")+'</div><input type="text" name="EMAIL" placeholder="'+arparams.MODAL_EMAIL_EX+'" class="o-w-email" '+(arparams.REQUEST_EMAIL_REQ=="Y"?"required":"")+' autocomplete="off" value="'+(array_data.user.user_email!=null?array_data.user.user_email:"")+'"><br>':"")+(arparams.REQUEST_PHONE=="Y"?'<div class="o-w-label">'+arparams.MODAL_YOUR_PHONE+":"+(arparams.REQUEST_PHONE_REQ=="Y"?'<sup class="o-w-sup-required">*</sup>':"")+'</div><input type="text" name="PHONE" placeholder="'+arparams.MODAL_YOUR_PHONE_EX+'" class="o-w-phone" '+(arparams.REQUEST_PHONE_REQ=="Y"?"required":"")+' autocomplete="off" value="'+(array_data.user.user_phone!=null?array_data.user.user_phone:"")+'"><br>':"'")+(arparams.REQUEST_COMMENT=="Y"?'<div class="o-w-label">'+arparams.MODAL_COMMENT+':</div><textarea name="COMMENT" placeholder="'+arparams.MODAL_COMMENT_EX+'"></textarea>':"")+payment_block+delivery_block+(arparams.REQUEST_PRIVACY=="Y"?'<div class="o-w-public-agry-block o-w-cr-costume"><input type="checkbox" id="o-w-agry" value="1" required="" checked> <label for="o-w-agry">'+arparams.MODAL_PRIVACY_FULL_LINE+"</label></div>":"")+'<br><br><div class="o-w-public-btn o-w-public-btn-primary o-w-send" data-mess_success_title="'+arparams.MESS_SUCCESS_TITLE+'" data-metrika_send="'+m_s_target+'">'+arparams.MODAL_TEXT_BUTTON+"</div></div>";jQuery(".o-w-action-block").html(html);jQuery(".o-w-send").click(function(){var m_s_target=jQuery(this).data("metrika_send");o_w_send(jQuery(this),m_s_target);return false;});o_w_calc_current_basket_price();return false;});}function o_w_get_text_params(){var ret=[],i=0;jQuery(".o-w-action-block").find(".o-w-group-title").each(function(){var t=jQuery(this).html();var v=jQuery(this).find("+ div").find(".o-w-active").data("val");ret[i++]=t+": "+v;});return ret.join(", ");}function o_w_in_array(needle,arr){var found=false;for(var i in arr){if(arr[i]==needle){found=true;}}return found;}function o_w_get_main_view(data){var html="";var cart_html="";if(arparams.CURRENT_CART=="Y"&&typeof(data.current_basket)=="object"&&data.current_basket.length>0){cart_html+="<h2>"+arparams.CURRENT_CART_TITLE+'</h2><div class="o-w-current-cart">';for(i in data.current_basket){var be=data.current_basket[i];console.log(be);var props=[],j=0,cart_id=data.current_basket[i]["ID"];if(typeof(be.info.props)!="undefined"&&typeof(be.info.props.offers)=="object"){for(ofid in be.info.props.offers){for(prop_name in be.info.props.offers[ofid]){var prop_val=be.info.props.offers[ofid][prop_name].value;if(typeof(prop_val)!="undefined"&&prop_val!=null&&prop_val.length>0){props[j++]=be.info.props.param_group_names[prop_name]+":&nbsp;"+prop_val;}}}}cart_html+='<div class="o-w-be-item" data-id_cart="'+cart_id+'">'+(typeof(be.info.img)=="string"&&be.info.img!=""?'<div class="o-w-img"><img src="'+be.info.img+'" /></div>':"")+'<div class="o-w-be-title"><b>'+be.NAME+"</b><br>"+props.join(", ")+'<br><b class="cnt-sum-item"><span class="o-w-item-quantity">'+parseInt(be.QUANTITY)+'</span> x <span class="o-w-item-cost">'+parseFloat(be.PRICE)+"</span> "+arparams.MODAL_CURRENCY+'</b></div><div><div class="o-w-be-del" data-id_cart="'+cart_id+'">X</div></div></div>';}cart_html+='</div><div class="o-w-cart-total-block">'+(typeof(arparams.CART_COUNT)=="string"?arparams.CART_COUNT:"Всего товаров:")+' <span class="o-w-all-cnt"></span> '+(typeof(arparams.CART_SUM)=="string"?arparams.CART_SUM:"на сумму")+' <span class="o-w-all-sum"></span> '+arparams.MODAL_CURRENCY+"</div>";}html+=cart_html;html+="<h2 class='o-w-title'>"+data.name+'</h2><div class="o-w-item">'+(typeof(data.img)=="string"&&data.img!=""?'<div class="o-w-item-image"><img src="'+data.img+'" alt="" />':"")+'<div class="o-w-price"></div>'+(arparams.REQUEST_QUANTITY=="Y"?'<div class="o-w-quantity-block"><input type="button" class="o-w-quantity-minus" value="-"><input type="text" name="q_w_quantity" value="1"><input type="button" class="o-w-quantity-plus" value="+"></div>':'<input type="hidden" name="q_w_quantity" value="1">')+'</div><div class="o-w-action-block">';if(data.offers_exists){var prop_val_array=[];var repeats=[];for(var code in data.offers.param_group_names){var html1="";html1='<div class="o-w-group-title">'+data.offers.param_group_names[code]+'</div><div class="o-w-block-group">';var i=0;var i1=0;prop_val_array[code]=[];for(var offer_id in data.offers.offers){var val=data.offers.offers[offer_id][code].value;var file=data.offers.offers[offer_id][code].file;if(typeof(repeats[code])!="object"){repeats[code]=[];}if(typeof(prop_val_array[code][val])!="object"){prop_val_array[code][val]=[];}prop_val_array[code][val][i++]=offer_id;if(typeof(repeats[code][val])!="number"&&val!=""&&val!=null){repeats[code][val]=1;html1+='<div class="o-w-item-param'+((typeof(file)=="string")&&file!=""?" o-w-item-param-img":"")+'" data-code="'+code+'" data-val="'+val+'"><div>'+((typeof(file)=="string")&&file!=""?'<img src="'+file+'" alt="" /><br>':"")+val+"</div></div>";i1++;}}html1+="</div>";if(i1>0){html+=html1;}}}html+='<div class="o-w-main-button-first-block"></div></div></div>';return html;}function o_w_modal_show(){jQuery("body").addClass("o-w-modal-lock");jQuery(".o-w-modal-overlay").addClass("active");jQuery(".o-w-modal-base").addClass("active");jQuery(".o-w-modal-overlay").click(function(){o_w_modal_hide();return false;});o_w_close_init();return false;}function o_w_modal_hide(){jQuery("body").removeClass("o-w-modal-lock");jQuery(".o-w-modal-overlay").removeClass("active");jQuery(".o-w-modal-base").removeClass("active");}function o_w_close_init(){jQuery(".o-w-close").click(function(){o_w_modal_hide();return false;});}function is_email(val){var pattern=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;return pattern.test(val);}function is_phone(val){var pattern=/^\d[\d\(\)\s-]{4,22}\d$/;return pattern.test(val);}function o_w_send(button,m_s_target,callback_function){var url="/bitrix/components/webes/oneclick/ajax.php?act=sendorder";var ret=0;var i=0;if(jQuery(".o-w-action-block input[name='EMAIL']").is(":visible")){var email=jQuery(".o-w-action-block input[name='EMAIL']");if(email.val()!=""&&!is_email(email.val())){email.addClass("o-w-warning");return false;}else{email.removeClass("o-w-warning");}}if(jQuery(".o-w-action-block input[name='PHONE']").is(":visible")){var phone=jQuery(".o-w-action-block input[name='PHONE']");if(phone.val().indexOf("+")!=-1){phone.val(phone.val().replace("+",""));}if(phone.val()!=""&&!is_phone(phone.val())){phone.addClass("o-w-warning");return false;}else{phone.removeClass("o-w-warning");}}button.closest(".o-w-action-block").find("input:required, select:required, textarea:required").each(function(){if(jQuery(this).val()==""||(get_prop_element(jQuery(this),"type")=="checkbox"&&get_prop_element(jQuery(this),"checked")==false)||(get_prop_element(jQuery(this),"type")=="email"&&!is_email(jQuery(this).val()))||(get_prop_element(jQuery(this),"type")=="phone"&&!is_phone(jQuery(this).val()))){i++;jQuery(this).addClass("o-w-warning");if(i==1){jQuery(this).focus();}ret=1;}});if(ret){jQuery(".o-w-warning").on("keyup change keydown",function(){jQuery(this).removeClass("o-w-warning");});return false;}var formDataSerialized=jQuery(".o-w-modal-inner").find("input,select,textarea").serialize();o_w_loading();jQuery.post(url,formDataSerialized,function(res){if(typeof(res)=="string"){res=JSON.parse(res);}jQuery(".o-w-modal-title").html(arparams.MODAL_ORDER_NUMBER+" "+res.orderId);jQuery(".o-w-modal-inner").html("<p>"+button.data("mess_success_title")+"</p><p>"+res.pay_html+"</p>");o_w_modal_show();if(m_s_target!=null&&typeof(m_s_target)=="string"&&m_s_target.length>0){reachgoal_send(m_s_target);}if(typeof(callback_function)=="function"){callback_function(data);}});}function reachgoal_send(key){if(typeof(ga)=="function"){ga("send","event",key,"click");}var values=Object.keys(window).filter(function(el){return/^yaCounter.*?/i.test(el);});var mid=0;if(values.length>0){mid=values[0].replace("yaCounter","");}if(typeof(ym)=="object"||typeof(ym)=="function"){ym(mid,"reachGoal",key);}else{var cmd="yaCounter"+mid+".reachGoal('"+key+"')";eval(cmd);}}function get_prop_element(element,prop_name){if(typeof(element.prop(prop_name))=="string"||typeof(element.prop(prop_name))=="boolean"){return element.prop(prop_name);}else{if(typeof(element.attr(prop_name))=="string"||typeof(element.attr(prop_name))=="boolean"){return element.attr(prop_name);}else{return null;}}}function o_w_loading(){jQuery(".o-w-modal-inner").html('<div style="width:100%;min-height:300px;height:80vh;display:flex;"><img src="/bitrix/components/webes/oneclick/images/ajax-loader.gif" style="width:64px;height:64px;margin:auto;"></div>');}